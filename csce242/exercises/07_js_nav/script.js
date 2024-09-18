/*When the hamburger is clicked, toggle between showing
and hiding the nav items*/

//const hamburger = document.getElementById("toggle-nav");
//toggle nav 

//hamburger.onclick = () =>{
    //document.getElementById("columns-hidden-small").
//}

document.querySelector("#toggle-nav").onclick = () =>{
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

/*Don't go to links destination when clicked*/
document.getElementById("click-link").onclick = (event) =>{
    event.preventDefault(); //don't go to the links destination//
    console.log("you clicked a link");
}

/*Chagne the ball color*/
document.getElementById(" ").onchange = (event) => {
    document.getElementById("ball").style.setProperty("background-color" , e.target.value);
    //document.querySelector(":root").
}

/*Move ball down when button is clicked*/
let pos=0;
document.getElementById("move-down").onclick = () =>{
    pos++;
    document.getElementById("ball").style.setProperty("top", pos + "px");
}