// let us first fetch the media or video file to play
const myVideo = document.querySelector("#my-video");
console.log(myVideo);

//mute unmute logic
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleAudio);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function toggleAudio() {
  // If the video has no sound that mean muted === true, then unmute the video
  if (myVideo.muted) {
    myVideo.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
    // IF the video has sound then mute the video
  } else {
    myVideo.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}
// ----------------
//play pause logic
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", togglePlayback);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function togglePlayback() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}
//------------------------
//Fast foward logic
const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

fastForwardButton.addEventListener("click", fastForward);
function fastForward() {
  if (myVideo.playbackRate === 1.0) {
    myVideo.playbackRate = 2.0;
  } else {
    myVideo.playbackRate === 1.0;
  }
}
// ---------------------------------
//stepping logic button
const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

step1Button.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 17.0;
}

const step2Button = document.querySelector("#step2-button");
console.log(step2Button);

step1Button.addEventListener("click", gotoStep2);

function gotoStep2() {
  myVideo.currentTime = 43.0;
}

//Full screen logic
const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", goFullscreen);

function goFullscreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
// progress bar
myVideo.addEventListener("timeupdate", updateProgressbar);

const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

function updateProgressbar() {
  // find in percentage the amount of video played
  let progress = (myVideo.currentTime / myVideo.duration) * 100;
  console.log(progress);
  // adjust the width of the progress bar accordingly
  progressBar.style.width = progress + "%";
}
// = assigning value name = "rohit" id =3;
// == comparing values 3 == 4 false let b = 4; b==4 true
// === compare value and type 3 == "3" true 3=== "3" false
// myvideo.muted === true ==> myVideo.muted
// myVideo.muted === false => !myVideo.muted
// Like Button
const heartButton = document.querySelector("#heart-button");
console.log(heartButton);

heartButton.addEventListener("click", updatedLikes);
let likes = 0;
const likesContainer = document.querySelector("#likes");

function updatedLikes() {
  likes++;
  likesContainer.textContent = likes;
}
//-------------------------------
// playlist logic
const playist = [
  {
    id: 1,
    src: "startdust.mp4",
    name: "Stardust",
  },
  {
    id: 2,
    src: "zenscape.mp4",
    name: "Zenscape",
  },

  {
    id: 3,
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
    name: "Music Video",
  },
];
const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);

stardustButton.addEventListener("click", function chooseStartdust() {
  chooseVideo(0);
});

const zenscapeButton = document.querySelector("#zenscape-vid-button");
console.log(zenscapeButton);

stardustButton.addEventListener("click", function chooseZenscape() {
  chooseVideo(1);
});

const musicVidButton = document.querySelector("#musicvideo-vid-button");
console.log(stardustButton);

stardustButton.addEventListener("click", function chooseStartdust() {
  chooseVideo(2);
});

