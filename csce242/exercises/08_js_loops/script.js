/* When the hamburger is clicked, toggle between showing
and hiding the nav items */
//document.getElementById("toggle-nav")
document.querySelector("#toggle-nav").onclick = () => {
  document.getElementById("nav-items").classList.toggle("hidden-small");
};

document.getElementById("btn-loop").onclick = () => {
  const startNum = parseInt(document.getElementById("txt-first-num").value);
  const endNum = parseInt(document.getElementById("txt-last-num").value);
  const ul = document.getElementById("numbers");

  console.log(`counting from ${startNum} to ${endNum}`);

  if(endNum >= startNum){
    for(let i = startNum; i <= endNum; i++){
      ul.append(createLi(i));
    }
  } else {
    for(let i = endNum; i >= startNum; i--){
      ul.append(createLi(i));
    }
  }
}

const createLi = (num) => {
  const li = document.createElement("li");
  li.innerHTML = num;
  li.setAttribute("id", "li" + num);

  li.onclick = () => {
    console.log(`Lucky number ${num}`);
  };

  return li;
}

let counter=0;
let updateCount;


document.getElementById("btn-count").onclick = (e) =>{
  const count = document.getElementById("count");

  if(e.target.innerHTML == "Start"){
    e.target.innerHTML = "Stop";
    updateCount = setInterval(() => {
      counter++;
      count.innerHTML=counter;
    }, 1000);

  } else {
    e.target.innerHTML = "Start";
    clearInterval(updateCount);
  }
}

/*Learning Toys*/
let toys = ["drum", "ball", "rope", "ballon", "tire"];

/*
for(let i=0; i<toys.length; i++){
  console.log(toys[i]);
}
*/

/* Shows that you can get the index if you need it
toys.forEach((toy, i)=>{
  console.log(i + toy)
});
*/

toys.forEach((toy)=>{
  const p = document.createElement("p");
  p.innerHTML=toy;
  document.getElementById("list").append(p);
});

/*Santas Expenses*/
let toyPrices = [];
toyPrices["barbie"]=7.50;
toyPrices["doll house"]=80.00;
toyPrices["slide"]=30.00;
toyPrices["ken"]=4.00;
toyPrices["bike"]=10.00;

/*Associative Array*/
const table = document.getElementById("list-prices");

for(let toy in toyPrices){
  let tr = document.getElementById("tr");
  tr.append(createTd(toy));
  tr.append(createTd(toyPrices[toy]));

  tr.onclick = () =>{
    
  }
}