//Variables
const slider = document.getElementById("slider");
const colorslider = document.getElementById("color-slider");
const colormessage = document.getElementById("color-message");
const exercise1Link = document.getElementById("exercise1");
const exercise2Link = document.getElementById("exercise2");
const smallbutton = document.getElementById("small");
const mediumbutton = document.getElementById("medium");
const largebutton = document.getElementById("large");
const picturecontainer = document.getElementById("picture-container");

exercise1Link.addEventListener("click", (e) => {
    e.preventDefault();
    showExercise("color-slider");
});

exercise2Link.addEventListener("click", (e) => {
    e.preventDefault();
    showExercise("picture-chooser");
});

//showExercise function
function showExercise(exercise) {
    document.getElementById('color-slider').style.display = 'none';
    document.getElementById('picture-chooser').style.display = 'none';
    document.getElementById(exercise).style.display = 'block';
}

//Slider
slider.addEventListener("input", updateColor);

function updateColor() {
    const redValue = slider.value;
    const color = `rgb(${redValue}, 0, 0)`;
    colorslider.style.backgroundColor = color;
    updateColorMessage(redValue);
}

function updateColorMessage(value) {
    if (value < 85) {
        colormessage.textContent = "Calm";
    } else if (value < 170) {
        colormessage.textContent = "Cool";
    } else {
        colormessage.textContent = "Collected";
    }
}

//Picture
smallbutton.addEventListener("click", () => showPicture("small"));
mediumbutton.addEventListener("click", () => showPicture("medium"));
largebutton.addEventListener("click", () => showPicture("large"));

function showPicture(size) {
    let width, height;
    if (size === "small") {
            width = 200;
            height = 150;
    } else if (size == "medium"){
        width = 400;
        height = 300;
    } else if (size == "large"){
        width = 600;
        height = 450;
    }
    picturecontainer.innerHTML = `<img src="https://picsum.photos/${width}/${height}" alt="${size} random image">`;
}

// Initialize color slider
updateColor();