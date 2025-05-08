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
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}

//progressBar

// erokiaSound.addEventListener("timeupdate", updateProgressbar);

// const progressBar = document.querySelector("#progress-bar");
// console.log(progressBar);

// function updateProgressbar() {

//   let progress = (erokiaSound.currentTime / erokiaSound.duration) * 100;
//   console.log(progress);

//   progressBar.style.width = progress + "%";
// }

// timeDisplay

const currentTime = document.querySelector("#current-time");
console.log(currentTime);

const totalDuration = document.querySelector("#total-duration");
console.log(totalDuration);

const seekSlider = document.querySelector("#seek-slider");
console.log(seekSlider);

const playerProgress = document.querySelector("#player-progress");
console.log(playerProgress);

function formaTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

erokiaSound.addEventListener("loadedmetadata", () => {
  seekSlider.max = erokiaSound.totalDuration;
  totalDuration.textContent = formationTime(erokiaSound.totalDuration);
});

erokiaSound.addEventListener("timeupdate", () => {
  seekSlider;
});
