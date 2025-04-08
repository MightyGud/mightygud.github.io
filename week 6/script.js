const myButton = document.querySelector("#my-button");
console.log(myButton);
const header = document.querySelector("header");
myButton.addEventListener("click", handleClick);
let course = "OART1013";

const myCat = document.querySelector("#my-cat");
console.log(myCat);

myCat.addEventListener("mouseenter", addme);
myCat.addEventListener("mouseleave", removeMe);
function handleClick() {
  console.log("did you just click me?");
  // header.innerHTML += `<h1> this is ${course} </h1>`
}

function addme() {
  myCat.classList.add("round");
}

function removeMe() {
  myCat.classList.remove("round");
}

function handleClick() {
  console.log("did you just click me");
  myCat.classList.toggle("round");
}

// console.log(header);
// console.log(header.innerHTML);
// console.log(header.innerHTML)
const topheading = document.querySelector("h1");
// console.log(topheading);
// console.log(topheading.textContent);
// topheading.textContent = "this is my new top heading";
topheading.style.color = "red";

const allParas = document.querySelector("p");
console.log(allParas);
for (let i = 0; i < allParas.length; i++) {
  //   console.log(allParas[i].textContent);
  allParas[i].style.border = "1px solid blue";
  allParas[i].style.backgroundColor = "beige";
}
// console.log(allParas.textContent);
const sh1 = document.querySelector("#first-subheading");
// console.log(sh1);
// console.log(sh1.textContent);
const blue1 = document.querySelector(".blue-color");
// console.log(blue1);
for (let i = 0; i < blue1.length; i++) {
  //   console.log(blue1[i].textContent);
}
const allSubHeadings = document.querySelectorAll("h2");
// console.log(allSubHeadings);
