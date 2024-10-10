//hamburger menu
document.addEventListener('DOMContentLoaded',() =>{
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('main-nav');

    hamburger.addEventListener('click',() =>{
        nav.classList.toggle('active');
    });
});

//slideshow images
const slide = () => {
    const currentImage = document.querySelector("#slideshow img.active");
    let nextImage = currentImage.nextElementSibling;

    // reached the end of the list
    if (nextImage === null) {
        nextImage = document.querySelector("#slideshow img:first-child");
    }

    currentImage.classList.remove("active");
    nextImage.classList.add("active");
}

setInterval(slide, 4000);

// Function to fetch data from a JSON file
const getData = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

//Updated Modal Feature to parse through JSON; used pieces from Assignment10,9, and in-class exercise
const showItems = async (url, sectionId) => {
    const items = await getData(url);
    const section = document.getElementById(sectionId);
    if (!section) return;

    section.innerHTML = "";

    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("item");

        const img = document.createElement("img");
        img.src = item.img_name;
        img.alt = item.title;
        img.height = 100;
        img.width = 300;

        const titleElement = document.createElement("h3");
        titleElement.textContent = item.title;

        card.appendChild(img);
        card.appendChild(titleElement);
        section.appendChild(card);

        //Modal on click
        card.addEventListener('click', () => {
            const modal = document.getElementById("info-modal");
            const modalTitle = document.getElementById("modal-title");
            const modalDescription = document.getElementById("modal-description");
            const modalImage = document.getElementById("modal-image");
            const modalLink = document.getElementById("modal-link");

            // Update modal content
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

            modal.style.display = 'flex'; // Show modal
        });
    });
};

//Close the modal
const setupModalClose = () => {
    const modal = document.getElementById("info-modal");
    const closeBtn = document.querySelector(".close-btn");

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    //close on window click
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};

// Load data for each section
const init = () => {
    showItems('json/landmarks.json', 'landmark-imgs');
    showItems('json/munchies.json', 'food-imgs');
    showItems('json/activities.json', 'activities-img');
    setupModalClose();
};

window.onload = init;