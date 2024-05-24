document.addEventListener('DOMContentLoaded', () => {
    const participantList = document.getElementById('participants-list');
    const eventId = new URLSearchParams(window.location.search).get('eventId');
    let users = [];
    const searchInput = document.querySelector("[data-search]")

    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        users.forEach(user => {
            const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value);
            user.element.classList.toggle("hide", !isVisible);
        })
    })

    const fetchParticipants = async () => {
        try {
            let url = `https://event-registration-app-back.onrender.com/event/${eventId}/participants`;
            const response = await fetch(url);
            const participants = await response.json();
            displayParticipants(participants);
        } catch (error) {
            console.error('error getting participants', error)
        }
    };

    const displayParticipants = (participants) => {
        participantList.innerHTML = '';
        users = participants.map(participant => {
            const participantElement = document.createElement('div');
            participantElement.classList.add('participant');

            const nameElement = document.createElement('h3');
            nameElement.textContent = participant.name;

            const emailElement = document.createElement('p');
            emailElement.textContent = participant.email;

            participantElement.appendChild(nameElement);
            participantElement.appendChild(emailElement);

            participantList.appendChild(participantElement);
            return { name: participant.name, email: participant.email, element: participantElement }
        });
    };

    fetchParticipants();
});