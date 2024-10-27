// Hamburger menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('main-nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

// Slideshow images
const slide = () => {
    const currentImage = document.querySelector("#slideshow img.active");
    let nextImage = currentImage.nextElementSibling;

    // Reached the end of the list
    if (nextImage === null) {
        nextImage = document.querySelector("#slideshow img:first-child");
    }

    currentImage.classList.remove("active");
    nextImage.classList.add("active");
}

setInterval(slide, 4000);

// Fetch data from a JSON file
const getData = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Function to show items 
const showItems = async (url, sectionId) => {
    const items = await getData(url);
    const section = document.getElementById(sectionId);
    if (!section) return;

    const itemDivs = {
        'Ho Chi Minh City': section.querySelector('.hcmcity'),
        'Saigon': section.querySelector('.saigon'),
        'Hanoi': section.querySelector('.hanoi'),
        'Hạ Long Bay': section.querySelector('.hlbay'),
        'Bánh mì': section.querySelector('.banhmi'),
        'Phở': section.querySelector('.pho'),
        'Bún bò Huế': section.querySelector('.bbh'),
        'Bún thịt nướng': section.querySelector('.btn'),
        'Heritage Line Ylang Cruise': section.querySelector('.cruise'),
        'The Marble Mountains': section.querySelector('.mm'),
        'Cat Ba Island': section.querySelector('.island'),
        'The Old Quarter': section.querySelector('.quarter')
    };

    items.forEach(item => {
        const itemDiv = itemDivs[item.title];
        if (itemDiv) {
            // Update image and title
            const img = itemDiv.querySelector('img');
            const titleElement = itemDiv.querySelector('h3');

            img.src = item.img_name;
            img.alt = item.title;
            titleElement.textContent = item.title;

            // Modal on click
            itemDiv.addEventListener('click', () => {
                const modal = document.getElementById("info-modal");
                const modalTitle = document.getElementById("modal-title");
                const modalDescription = document.getElementById("modal-description");
                const modalImage = document.getElementById("modal-image");
                const modalLink = document.getElementById("modal-link");

                modalTitle.innerText = item.title;
                modalDescription.innerHTML = `
                    <p>${item.description}</p>
                    ${item.attractions ? `<p><strong>Attractions:</strong> ${item.attractions.join(', ')}</p>` : ''}
                    ${item.historical_significance ? `<p><strong>Historical Significance:</strong> ${item.historical_significance}</p>` : ''}
                    ${item.ingredients ? `<p><strong>Ingredients:</strong> ${item.ingredients.join(', ')}</p>` : ''}
                    ${item.region ? `<p><strong>Region:</strong> ${item.region}</p>` : ''}
                    ${item.city ? `<p><strong>City:</strong> ${item.city}</p>` : ''}
                    ${item.difficulty_level ? `<p><strong>Difficulty Level:</strong> ${item.difficulty_level}</p>` : ''}
                `;
                modalImage.src = item.img_name;
                modalLink.href = item.link;
                modalLink.textContent = "Learn More";

                modal.style.display = 'flex';
            });
        }
    });
};

// Close modal
const setupModalClose = () => {
    const modal = document.getElementById("info-modal");
    const closeBtn = document.querySelector(".close-btn");

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};

// Initialize the content
const init = () => {
    showItems('json/landmarks.json', 'landmark-imgs');
    showItems('json/munchies.json', 'food-imgs');
    showItems('json/activities.json', 'activities-img');
    setupModalClose();
};


//Contact form
// Initialize form submission event
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("contact-me").addEventListener("submit", displayEmailResults);
});

const displayEmailResults = async (e) => {
    e.preventDefault();
    const form = e.target;
    const emailResults = document.getElementById("results"); // Using "results" div for displaying messages
    emailResults.innerHTML = ""; // Clear previous messages

    // Gather form data
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());

    try {
        // Send form data to Web3Forms
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(formJSON)
        });

        // Display success or error message
        const result = document.createElement("p");
        if (response.ok) {
            result.innerHTML = "Your message has been sent, and we will respond shortly. Thank you for your input and suggestions.";
            result.style.color = "lightgreen";
            form.reset();
        } else {
            result.innerHTML = "Sorry, your message was not sent.";
            result.style.color = "red";
        }
        emailResults.appendChild(result);
    } catch (error) {
        console.log("Error:", error);
        const errorResult = document.createElement("p");
        errorResult.innerHTML = "Sorry, your email couldn't be sent due to a network error.";
        errorResult.style.color = "red";
        emailResults.appendChild(errorResult);
    }
};

window.onload = init;
