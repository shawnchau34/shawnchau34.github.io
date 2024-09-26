// Associative array for images with help from W3 Schools
const images = {
    "birthday": { src: "images/birthday.jpg", title: "Birthday", description: "A happy stick figure wearing a party hat" },
    "clown": { src: "images/clown.jpg", title: "Clown", description: "A stick figure of a clown performing" },
    "rain": { src: "images/rain.jpg", title: "Rain", description: "A stick figure holding an umbrella" },
    "read": { src: "images/read.jpg", title: "Read", description: "A stick figure holding a book" },
    "shovel": { src: "images/shovel.jpg", title: "Shovel", description: "A stick figure holding a shovel" },
    "work": { src: "images/work.jpg", title: "Work", description: "A stick figure working on a laptop" }
};

// Arrow function to load images with help from W3 Schools
const loadImages = () => {
    const gallery = document.querySelector('.gallery');
    Object.values(images).forEach(image => {
        const imageBox = document.createElement('div');
            imageBox.classList.add('image-box');
            imageBox.innerHTML = `<img src="${image.src}" alt="${image.title}">`;
            imageBox.addEventListener('click', () => showDescription(image));
            gallery.appendChild(imageBox);
    });
}

// Arrow function to show description with help from W3 Schools
const showDescription = (image) => {
    document.getElementById('image-description').innerHTML = `<h2>${image.title}</h2><p>${image.description}</p>`;
}

// Load images when the page loads
window.onload = loadImages;
