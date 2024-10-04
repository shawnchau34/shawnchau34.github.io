// Bird class
class Bird {
    constructor(title, image, size, lifespan, food, habitat, fact) {
        this.title = title;
        this.image = image;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
    }

    // getSection method
    getSection = () => `
        <div class="bird" onclick="showModal('${this.title}')">
            <img src="${this.image}" alt="${this.title}">
            <div class="bird-title">${this.title}</div>
        </div>
    `;

    //getExpandedSection method
    getExpandedSection = () => `
        <h3>${this.title}</h3>
        <p><strong>Size:</strong> ${this.size}</p>
        <p><strong>Lifespan:</strong> ${this.lifespan}</p>
        <p><strong>Food:</strong> ${this.food}</p>
        <p><strong>Habitat:</strong> ${this.habitat}</p>
        <p><strong>Interesting Fact:</strong> ${this.fact}</p>
        <img src="${this.image}" alt="${this.title}">
    `;
}

//array of birds
const birds = [
    new Bird('Hummingbird', "images/hummingbird.jpg", '2.5 inches', '3-5 years', 'Nectar (Sugar water)', 'Trees', 'They\'re nicknamed "Hummers"'),
    new Bird('Blue Jay', 'images/bluejay.jpg', '11 inches', '7 years', 'Insects, Nuts', 'Woodlands', 'Blue Jays can mimic the calls of hawks'),
    new Bird('Cardinal', 'images/cardinal.jpg', '8.3 inches', '3 years', 'Seeds, Grains', 'Gardens, Forests', 'Male Cardinals are bright red in color'),
    new Bird('Robin', 'images/robin.jpg', '10 inches', '2 years', 'Worms, Fruit', 'Open woodlands', 'Robins are known for their melodious singing')
];

// Function to display birds
const displayBirds = () => {
    const birdContainer = document.getElementById('bird-container');
    birds.forEach(bird => birdContainer.innerHTML += bird.getSection());
};

// Modal
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-body');
const closeModal = document.getElementsByClassName('close')[0];

// Function to show modal with bird details
const showModal = birdTitle => {
    const bird = birds.find(b => b.title === birdTitle);
    modalContent.innerHTML = bird.getExpandedSection();
    modal.style.display = 'block';
};

// Close modal on click
closeModal.onclick = () => modal.style.display = 'none';

// Close modal
window.onclick = event => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Initial function call to display birds
displayBirds();
