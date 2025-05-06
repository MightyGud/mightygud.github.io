const MyButton = document.querySelector("#my-button");

MyButton.addEventListener("click", moveInput);

// const myInput = document.querySelector("#my-input");
// let clicked = false;

// function moveInput() {
//   if (!clicked) {
//     myInput.style.translate = "30px, 40px";
//     clicked = true;
//   } else {
//     myInput.style.translate = "0px, 0px";
//     clicked = false;
//   }
// }

const myInput = document.querySelector("#my-duck");
let clicked = false;

function moveInput() {
  if (!clicked) {
    myInput.style.translate = "30px, 40px";
    clicked = true;
  } else {
    myInput.style.translate = "0px, 0px";
    clicked = false;
  }
}
