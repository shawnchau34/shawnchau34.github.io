//Count

let count=0

document.getElementById("count").addEventListener("click", ()=>{
    count++;
    document.getElementById("counter").innerHTML=count;
});

//image
document.getElementById("image").addEventListener("click", ()=>{
    window.location.reload();
});

//slider
document.getElementById("boxslider").addEventListener("input", ()=>{
    const sliderValue = event.target.value;
    const box = document.getElementById("move");

    box.style.left = '${sliderValue}';
});