document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const raffleImage = document.getElementById('raffle-image');
    const ticketsContainer = document.getElementById('tickets-container');
    const totalPriceElement = document.getElementById('total-price');
    const submitButton = document.getElementById('submit-guesses');
    let guesses = [];
    const ticketPrice = 1000; // Ticket price in Kenyan Shillings
    const ticketImageSrc = 'tickets.jpg'; // Path to your ticket image

    raffleImage.addEventListener('click', (event) => {
        const rect = raffleImage.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const guess = { x: x, y: y, id: Date.now() }; // Add an id to each guess for identification

        guesses.push(guess);
        placeMarker(guess);
        addTicket(guess);
        updateTotalPrice();
    });

    submitButton.addEventListener('click', () => {
        // Send guesses to the server
        fetch('submit-guesses.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ guesses: guesses })
        }).then(response => response.json()).then(data => {
            // Handle the response from the server
            if (data.success) {
                // Clear the guesses array and markers
                guesses = [];
                clearMarkers();
                clearTickets();
                updateTotalPrice();
                // Display a success message
                alert('Your guesses have been submitted successfully!');
            } else {
                // Handle error (e.g., user has no tickets left)
                alert(`Error: ${data.message}`);
            }
        }).catch(error => {
            // Handle network or other errors
            console.error('Error submitting guesses:', error);
            alert('There was an error submitting your guesses. Please try again.');
        });
    });

    function placeMarker(guess) {
        const marker = document.createElement('div');
        marker.className = 'guess';
        marker.style.left = `${guess.x}px`;
        marker.style.top = `${guess.y}px`;
        marker.innerHTML = '+';
        marker.dataset.id = guess.id; // Associate the marker with the guess id
        imageContainer.appendChild(marker);
    }

    function clearMarkers() {
        const markers = document.querySelectorAll('.guess');
        markers.forEach(marker => marker.remove());
    }

    function addTicket(guess) {
        const ticketWrapper = document.createElement('div');
        ticketWrapper.className = 'ticket-wrapper';

        const ticket = document.createElement('img');
        ticket.src = ticketImageSrc;
        ticket.className = 'ticket';
        ticket.dataset.id = guess.id; // Associate the ticket with the guess id

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-ticket';
        deleteButton.innerHTML = 'x';
        deleteButton.dataset.id = guess.id; // Associate the delete button with the guess id
        deleteButton.addEventListener('click', deleteGuess);

        ticketWrapper.appendChild(ticket);
        ticketWrapper.appendChild(deleteButton);
        ticketsContainer.appendChild(ticketWrapper);
    }

    function clearTickets() {
        const tickets = document.querySelectorAll('.ticket-wrapper');
        tickets.forEach(ticket => ticket.remove());
    }

    function updateTotalPrice() {
        const totalPrice = guesses.length * ticketPrice;
        totalPriceElement.innerText = `Total Price: KES ${totalPrice}`;
    }

    function deleteGuess(event) {
        const id = event.target.dataset.id;
        guesses = guesses.filter(guess => guess.id != id); // Remove the guess from the guesses array
        document.querySelector(`.guess[data-id="${id}"]`).remove(); // Remove the corresponding marker
        event.target.parentElement.remove(); // Remove the ticket image and delete button
        updateTotalPrice(); // Update the total price
    }
});
