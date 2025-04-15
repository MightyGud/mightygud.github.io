const topHeading = document.querySelector("#top-heading");
console.log(topHeading);

let myNewHeading = "video is currently playing";

const startdustVideo = document.querySelector("#startdust-video");
console.log(startdustVideo);

const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playVideo);

function playVideo() {
  startdustVideo.play();
}

//-----------

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", toggleVideo);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function toggleVideo() {
  if (startdustVideo.paused || startdustVideo.ended) {
    startdustVideo.play();
    playPauseImg.src = "https://icons8.com/icon/pSwquXkxwLD8/pause";
  } else {
    startdustVideo.pause();
    playPauseImg.scr = "https://icons8.com/icon/pSwquXkxwLD8/pause";
  }
}
