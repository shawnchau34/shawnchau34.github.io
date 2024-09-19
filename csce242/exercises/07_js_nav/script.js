/*When the hamburger is clicked, toggle between showing
and hiding the nav items*/

//const hamburger = document.getElementById("toggle-nav");
//toggle nav 

//hamburger.onclick = () =>{
    //document.getElementById("columns-hidden-small").
//}

//document.querySelector("#toggle-nav").onclick = () =>{
    //document.getElementById("nav-items").classList.toggle("hidden-small");
//};

/*Don't go to links destination when clicked*/
//document.getElementById("click-link").onclick = (event) =>{
   // event.preventDefault(); //don't go to the links destination//
    //console.log("you clicked a link");


/*Chagne the ball color*/
//document.getElementById(" ").onchange = (event) => {
  //  document.getElementById("ball").style.setProperty("background-color" , e.target.value);
    //document.querySelector(":root").
}

/*Move ball down when button is clicked*/
//let pos=0;
//document.getElementById("move-down").onclick = () =>{
  //  pos++;
    //document.getElementById("ball").style.setProperty("top", pos + "px");

    /* When the hamburger is clicked, toggle between showing
and hiding the nav items */
//document.getElementById("toggle-nav")

document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

/* Don't go to links desitination when clicked */
document.getElementById("click-link").onclick = (event) => {
    event.preventDefault(); //don't go to the links destination
    console.log("you clicked a link");
};

/* Change the ball color */
document.getElementById("txt-color").onchange = (e) => {
    //document.getElementById("ball").style.setProperty("background-color", e.target.value);
    document.querySelector(":root").style.setProperty("--ball-color", e.target.value);
}

/* Move the ball down when the button is clicked */
let pos = 0;
document.getElementById("move-down").onclick = () => {
    pos++;
    document.getElementById("ball").style.setProperty("top", pos + "px");
}

/*Show Color Message*/
document.getElementById("btn-show-color").onclick = () =>{
    const color = document.getElementById("txt-enter-color").value.toLowerCase().trim();
    const messageP = document.getElementById("color-message");
    let mood = ""

    if(color == "red"){
        messageP.innerHTML = "Red is for anger";
        mood = 
    }else if(color == "blue"){

    }
}

document.getElementById("btn-donate").onclick = () =>{
    const goal = 10000;
    const donation = document.getElementById("txt-donations").value;
    const error = document.getElementById("error-donation");
    error.innerHTML = "";

    if(isNaN(donaation) || donation <0){
        error.innerHTML = "*Invalid";
        return;
    }

    const percentGoal = donation / goal * 100;
    console.log(percentGoal + "%");
}