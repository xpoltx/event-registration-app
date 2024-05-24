document.addEventListener('DOMContentLoaded', () => {
    const eventsList = document.getElementById('events-list');

    const sortBySelect = document.getElementById('sort-by');
    const sortButton = document.getElementById('sort-button');

    const fetchEvents = async (sortBy = '') => {
        try {
            let url = 'https://event-registration-app-back.onrender.com/events';
            if (sortBy) {
                if (sortBy === 'title') {
                    url = 'https://event-registration-app-back.onrender.com/events/title';
                } else if (sortBy === 'eventDate') {
                    url = 'https://event-registration-app-back.onrender.com/events/date';
                } else if (sortBy === 'organizer') {
                    url = 'https://event-registration-app-back.onrender.com/events/org';
                }
            }
            const response = await fetch(url);
            const events = await response.json();
            displayEvents(events);
        } catch (error) {
            console.error('Error getting event', error);
        }
    };

    const displayEvents = (events) => {
        eventsList.innerHTML = '';
        events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event');

            const titleElement = document.createElement('h3');
            titleElement.textContent = event.title;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = event.description;

            const dateElement = document.createElement('p');
            dateElement.textContent = event.dateElem;

            const organizerElement = document.createElement('p');
            organizerElement.textContent = event.organizer;

            const registerButton = document.createElement('button');
            registerButton.textContent = 'Register';
            registerButton.classList.add('register-button');

            registerButton.addEventListener('click', () => {
                window.location.href = `../pages/registration.html?eventId=${event._id}`;
            })

            const viewButton = document.createElement('button');
            viewButton.textContent = 'View';
            viewButton.classList.add('view-button');

            viewButton.addEventListener('click', () => {
                window.location.href = `../pages/participantPage.html?eventId=${event._id}`
            })

            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('button-container');
            buttonContainer.appendChild(registerButton);
            buttonContainer.appendChild(viewButton);


            eventElement.appendChild(titleElement);
            eventElement.appendChild(descriptionElement);
            eventElement.appendChild(dateElement);
            eventElement.appendChild(organizerElement);
            eventElement.appendChild(buttonContainer);

            eventsList.appendChild(eventElement);
        });
    }

    fetchEvents();

    sortButton.addEventListener('click', () => {
        const sortBy = sortBySelect.value;
        fetchEvents(sortBy);
    });
});