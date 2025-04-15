const topHeading = document.querySelector("#top-heading");
console.log(topHeading);

let myNewHeading = "audio is currently playing";

const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAudio);

function playAudio() {
  airportAudio.play();
}

//-----------
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAudio);

function pauseAudio(){
    airportAudio.pause();
}

//-------

