
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
//----
//progressBar : This also can be used to become the progress of the bar, however it is very narrow, and the interative is not that really unique, so i changed the style design of the bar, i took my reference to a bar just like Spotify


// erokiaSound.addEventListener("timeupdate", updateProgressbar);

// const progressBar = document.querySelector("#progress-bar");
// console.log(progressBar);

// function updateProgressbar() {

//   let progress = (erokiaSound.currentTime / erokiaSound.duration) * 100;
//   console.log(progress);

//   progressBar.style.width = progress + "%";
// }


//--------


const currentTime = document.querySelector("#current-time");
console.log(currentTime);

const Duration = document.querySelector("#duration");
console.log(Duration);

const progress = document.querySelector("#progress");
console.log(progress);

// for the function, i did some of the research of how does the time work, and i came to the conclution of the "FormatTime" function.
// formatTime is use to convert seconds into a time format, which is really common in the audio and video usages.
// i used sec to get the total number of seconds, i used Math.floor for both minutes (m) and seconds (s) to give the calculations of how many minutes are in that time
// (sec/60) calculates the full time of the video
// (sec % 60) get the remaining seconds after removing the minutes.
// After that i used String and adds leading 0 for if it less then 2 digits
// I add return => Resutling the time as a string.

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

//while the audio is loaded, i have set the bar's max and duration lables for the progress bar to run. However the function that i use for this can't work, nor ther is no other function i can't use.
// After doing some research, i realise that the only reason why the bar doesn't run, it is because the data of the song is not connected to the bar. In result to = no relate data = no connection.
// So to do this, i decided to use addEvenListener with 'loadmetadata' this have did 2 things: 1. run the audio files data to load. 2. bring the access of duration to NaN
// after done that i use progress max to equal the duration of the sounds
// AFter laoded i use the formatTime to display the time of the audio which has written above.

erokiaSound.addEventListener('loadedmetadata', () => {
 progress.max = erokiaSound.Duration;
Duration.textContent = formatTime(erokiaSound.Duration);
});

// After set the bar i need to create another code that when this is running, it need to update another bar.
// By using addEventListener with "timeupdate" this allowed be to track the current playback of the audio.
// the progress value update the position of the progress bar depend on how the audio is played.
// since the vaule that i put in the HTML is "0" this can move the slider from 0 to the duration of the audio itself.

erokiaSound.addEventListener("timeupdate", () => {
  progress.value = erokiaSound.currentTime; // Update progress bar value
  currentTime.textContent = formatTime(erokiaSound.currentTime); // Update current time text
});

//Problems: However even if the bar work, this the number doesn't show or the maximum doesn't work, i tried the code below. but that doesn't solve my issues with the minutes and seconds
//Plus this my thumb also doesn't work, because there is no other function that can use for to track the song.
//i tried to use this addEvent Listener but it doesn't work

// Unworking code:
// progress.addEventListener('input', () => {
//  erokiaSound.currentTime = parseFloat(progress.vaule);
//  });

//This is important because the interation of the bar need to work, but i don't know how can i make the ideas alive.
// After doing some research i came across this coding system

// It took me more than 2 days to understand how to code this problems:
// First the input itself is using for dragging and clicking on the progress bar
// parseFloat progress is use for the slider's string value into a real number, this help me to correclty update my audio playback postion.
// the !ifNaN is a Ensures the value is a valid number withen the audio range before playing
// This can prevent erroers likes: Nan, infinity and number outside of the valid time range
// I also realise that newTIme make the audio jump to the new position that the user will selects.

progress.addEventListener("input", () => {
  const newTime = parseFloat(progress.value);
  if (!isNaN(newTime) && isFinite(newTime) && newTime >= 0 && newTime <= erokiaSound.duration) {
    erokiaSound.currentTime = newTime;
  } else {
    console.error("Invalid time value: ", progress.value);
  }
});

//I also apply this for the duration that will show the number of the display ensure that my progress bar and the display times are properly initialized once the audio is loaded to avoid errors
// I use the loadedmetadata event to loaded the audio files, wait until the browser know how long the audio before updating the UI.
// the Audio duration is use to logs the total audio of the browser, it is very usefull for debugging- so you can see the duration, also confirm to load properly.
//If if (!isNaN(erokiaSound.duration) && isFinite(erokiaSound.duration)) {, this is to check if it show NaN (not a number) or Infinity when load in the website.
// the duration.textContent is use to format the time duration by using the time function like "3:04". i put it in a DOM Element <span> so i see the total length in minutes and seconds
// for the "else" to detect the error if the duration is invalid or not. It is uses to log of the erroer messange and help me debug the duration if it wasn't loaded corrently

erokiaSound.addEventListener("loadedmetadata", () => {
  console.log("Audio duration:", erokiaSound.duration);
  if (!isNaN(erokiaSound.duration) && isFinite(erokiaSound.duration)) {
    progress.max = erokiaSound.duration;
    duration.textContent = formatTime(erokiaSound.duration);
  } else {
    console.error("Invalid duration detected!");
  }
});

//And Finally i coded another Event if the audio end it will looped back to the beggining of the song.
erokiaSound.addEventListener("ended", () =>{
  console.log("Audio ended, looping...");
  erikoiaSound.currentTime = 0;
  progress.vaule = 0;
  erokiaSound.play()
});