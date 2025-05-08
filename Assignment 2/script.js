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

//progressBar This also can be used to become the process of the bar, however is very narrow, and it interative is not that really unique, so i changed the style design of the bar, i took my reference to a bar just like Spotify


// erokiaSound.addEventListener("timeupdate", updateProgressbar);

// const progressBar = document.querySelector("#progress-bar");
// console.log(progressBar);

// function updateProgressbar() {

//   let progress = (erokiaSound.currentTime / erokiaSound.duration) * 100;
//   console.log(progress);

//   progressBar.style.width = progress + "%";
// }

// timeDisplay ( This i the best work most frustration  and the most interesting work i ever done, i am excited to explain how i founded the solution for it)

const currentTime = document.querySelector("#current-time");
console.log(currentTime);

const Duration = document.querySelector("#duration");
console.log(Duration);

const progress = document.querySelector("#progress");
console.log(progress);

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

//while the audio is loaded, i have set the bar's max and duration lable i realise....
erokiaSound.addEventListener('loadedmetadata', () => {
 progress.max = erokiaSound.Duration;
Duration.textContent = formatTime(erokiaSound.Duration);
});

erokiaSound.addEventListener("timeupdate", () => {
  progress.value = erokiaSound.currentTime; // Update progress bar value
  currentTime.textContent = formatTime(erokiaSound.currentTime); // Update current time text
});


// progress.addEventListener('input', () => {
//  erokiaSound.currentTime = parseFloat(progress.vaule);
//  });


progress.addEventListener("input", () => {
  const newTime = parseFloat(progress.value);
  if (!isNaN(newTime) && isFinite(newTime) && newTime >= 0 && newTime <= erokiaSound.duration) {
    erokiaSound.currentTime = newTime;
  } else {
    console.error("Invalid time value: ", progress.value);
  }
});

erokiaSound.addEventListener("loadedmetadata", () => {
  console.log("Audio duration:", erokiaSound.duration);
  if (!isNaN(erokiaSound.duration) && isFinite(erokiaSound.duration)) {
    progress.max = erokiaSound.duration;
    duration.textContent = formatTime(erokiaSound.duration);
  } else {
    console.error("Invalid duration detected!");
  }
});

erokiaSound.addEventListener("ended", () =>{
  console.log("Audio ended, looping...");
  erikoiaSound.currentTime = 0;
  progress.vaule = 0;
  erokiaSound.play()
});

