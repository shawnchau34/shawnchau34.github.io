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