// myVideo contains the video I am working with
const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

// This button will play and pause the video on click
playPauseButton.addEventListener("click", toggleVideo);

function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    myVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    myVideo.pause();
  }
}

// This function will muste/unmute the video on click
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);
myVideo.addEventListener("click", toggleSound);
muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (myVideo.muted) {
    muteUnmuteButton.style.backgroundColor = "#d5cea3";
    myVideo.muted = false;
  } else {
    muteUnmuteButton.style.backgroundColor = "#736f55";
    myVideo.muted = true;
  }
}

// This function will update the progress bar to show how much of the video is playing and how much time has gone by
const progressBar = document.querySelector("#progress-bar-fill");
console.log(progressBar);

myVideo.addEventListener("timeupdate", updateProgressBar);

function updateProgressBar() {
  const progress = (myVideo.currentTime / myVideo.duration) * 100;
  console.log(progress);
  progressBar.style.width = progress + "%";
}

// This function will make the video fullscreen when double clicked
myVideo.addEventListener("dblclick", goFullScreen);

fullscreenButton.addEventListener("click", goFullScreen);

function goFullScreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// This function will add timestamps for easy navigation
const step1Button = document.querySelector("#step-1-button");
console.log(step1Button);
step1Button.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 16.0;
  // *adjust the timestamp accordingly*
}

const step2Button = document.querySelector("#step-2-button");
console.log(step2Button);
step2Button.addEventListener("click", gotoStep2);

function gotoStep2() {
  myVideo.currentTime = 20.0;
  // *adjust the timestamp accordingly*
}
