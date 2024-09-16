//Scoping- use let
//default for variables- use const

//function doStuff(){ //give functions better names, this is old way to do things
    //alert("Hello");

const doStuff = () =>{      //arrow syntax-new correct way for functions 
    alert("hello world");
}

const myButton = document.getElementById("btn-click");
//myButton.onclick = doStuff; //only parenthesis when you want to immedietely call on that function. old way though

myButton.onclick = () =>{
    document.getElementById("message").innerHTML = "Hello Everyone";
    document.getElementById("stuff").classList.add("special");
};


myButton.onclick = () =>{
    document.getElementById("btn").innerHTML = "Goodbye everyone";
    document.getElementById("btn").classList.remove("special");
}


//Showing data from an input field//
document.getElementById("txt-first-name").onkeyup = ()=>{
    const textBox=document.getElementById("txt-first-name");
    document.getElementById("result").innerText.textBox.value;
}