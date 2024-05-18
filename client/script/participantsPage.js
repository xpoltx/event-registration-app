document.addEventListener('DOMContentLoaded', ()=>{
    const participantList = document.getElementById('participants-list');
    const eventId = new URLSearchParams(window.location.search).get('eventId');

    const fetchParticipants = async()=>{
        try {
            let url = `http://localhost:3000/event/${eventId}/participants`;
            const response = await fetch(url);
            const participants = await response.json();
            displayParticipants(participants);
        } catch (error) {
            console.error('error getting participants', error)
        }
    };

    const displayParticipants = (participants) =>{
        participantList.innerHTML = '';
        participants.forEach(participant => {
            const participantElement = document.createElement('div');
            participantElement.classList.add('participant');

            const nameElement = document.createElement('h3');
            nameElement.textContent = participant.name;
            
            const emailElement = document.createElement('p');
            emailElement.textContent = participant.email;

            participantElement.appendChild(nameElement);
            participantElement.appendChild(emailElement);

            participantList.appendChild(participantElement);
        });
    };

    fetchParticipants();
});