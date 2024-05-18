document.addEventListener('DOMContentLoaded', () => {

    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', async (event) => {

        event.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        const formData = new FormData(registrationForm);
        const registrationData = {};
        formData.forEach((value, key) => {
            registrationData[key] = value;
        });
        registrationData.eventId = urlParams.get('eventId');;

        try {
            const response = await fetch('http://localhost:3000/event/participant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData),
            });
           
            if (response.ok) {
                alert('Event reg successful!');
                history.back();
                registrationForm.reset();
            } else {
                throw new Error('Event registration failed');
            }
        } catch (error) {
            alert('Event reg failed');
        }

    });

})