document.addEventListener('DOMContentLoaded', () => {
    const starsInput = document.getElementById('stars-input');
    const drawButton = document.getElementById('draw-button');
    const errorMessage = document.getElementById('error-message');
    const starsBox = document.getElementById('stars-box');
    const messageDisplay = document.getElementById('message-display');

    //Function to draw stars and display error messages if the # is invalid
    drawButton.addEventListener('click', () => {
        const numberOfStars = +starsInput.value;
        
        if (numberOfStars <= 0 || isNaN(numberOfStars)) {
            errorMessage.textContent = 'Invalid input. Please enter a number greater than 0.';
            starsBox.innerHTML = '';
            messageDisplay.textContent = '';
        } else {
            errorMessage.textContent = '';
            drawStars(numberOfStars);
        }
    });

    //Function to display the number of stars drawn when clicked on
    const drawStars = (count) => {
        starsBox.innerHTML = '';
        for (let i = 1; i <= count; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.dataset.number = i;

            star.addEventListener('click', () => {
                messageDisplay.textContent = `You clicked on star number ${i}!`;
            });

            starsBox.appendChild(star);
        }
    };
});