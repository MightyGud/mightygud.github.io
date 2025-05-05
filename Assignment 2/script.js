const topHeading = document.querySelector("#top-heading");
console.log(topHeading);

let myNewHeading = "Music is playing";

const erokiaSound = document.querySelector("#erokia_audio");
console.log(erokiaSound);

// play button
const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAudio);

function playAudio() {
  erokiaSound.play();
}

erokiaSound.loop = true;
//-----

// stop button
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAudio);

function pauseAudio() {
  erokiaSound.pause();
}
//-----

//looping feature
erokiaSound.loop = true;
// This is for looping, many listener don't want to restart their music manually.

//----

// mute/unmute button.

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleAudio);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function toggleAudio() {
  if (erokiaSound.muted) {
    erokiaSound.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    erokiaSound.muted = true;
    muteUnmuteButton.src =
      "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}
