document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-btn');
    const landing = document.querySelector('.landing');
    const container = document.querySelector('.container');
    const noButton = document.getElementById('no-btn');

    // Show the container when the start button is clicked
    startButton.addEventListener('click', function() {
        landing.classList.add('hidden');
        container.classList.remove('hidden');
    });

    // Prevent clicking the 'No' button
    noButton.addEventListener('mouseover', moveNoButton);
    noButton.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
    });

    // Move the 'No' button randomly within the container
    function moveNoButton() {
        const containerRect = container.getBoundingClientRect();
        const noButtonRect = noButton.getBoundingClientRect();

        const maxX = containerRect.width - noButtonRect.width;
        const maxY = containerRect.height - noButtonRect.height;

        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;

        randomX += 30;
        randomY += 30;

        randomX = Math.min(randomX, maxX);
        randomY = Math.min(randomY, maxY);

        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }

    // Handle 'Yes' button click
    document.getElementById('yes-btn').addEventListener('click', function() {
        container.innerHTML = `<h1>I knew we were meant to be soulmates🥹</h1>`;
    });
});
