// // in this secion I'm just giving variables so I can work on the current time playing and the overall duration of the video
// var curtimetext, durtimetext;
// curtimetext = document.getElementById("curtimetext");
// durtimetext = document.getElementById("durtimetext");

// vid.addEventListener("timeupdate", seektimeupdate, false);

// function seektimeupdate() {
//   var nt = vid.currentTime * (100 / vid.duration);
//   seekslider value = nt;
//   var curmins = math.floor(vid.currentTime / 60);
//   var cursecs = math.floor(vid.currentTime - curmins * 60);
//   var durmins = math.floor(vid.duration / 60);
//   var dursecs = math.round(vid.duration - durmins * 60);
//   if(cursecs < 10) {
//     cursecs = "0" +dursecs;
//   }
//   curtimetext.innerHTML = curmins+":"+cursecs;
//   durtimetext.innerHTML = durmins+":"+dursecs;
// }

// ^^This is another failed attempt of me trying to get the duration and current play time, but unfortunately it didn't work, so I left it :)

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
const fullscreenButton = document.querySelector("#fullscreen-button");
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

let vid = document.getElementById("myVideo");

function setCurTime() {
  myVideo.currentTime = 0;
}

// const introButton = document.querySelector("#intro-button");
// console.log(introButton);
// introButton.addEventListener("click", gotoIntroButton);
// function gotoStep1() {
// //   myVideo.currentTime = 28;
// // }
// ^^ failed version of me trying to create a button for the IntersectionObserver. Intead I followed a tutorial from firefox, that way I could still apply the timestamp function.

const materialsButton = document.querySelector("#materials-button");
console.log(materialsButton);
materialsButton.addEventListener("click", gotoMaterials);

function gotoMaterials() {
  myVideo.currentTime = 14;
}

const step1Button = document.querySelector("#step-1-button");
console.log(step1Button);
step1Button.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 28;
}

const step2Button = document.querySelector("#step-2-button");
console.log(step2Button);
step2Button.addEventListener("click", gotoStep2);

function gotoStep2() {
  myVideo.currentTime = 41;
}

const step3Button = document.querySelector("#step-3-button");
console.log(step3Button);
step3Button.addEventListener("click", gotoStep3);

function gotoStep3() {
  myVideo.currentTime = 51;
}

const step4Button = document.querySelector("#step-4-button");
console.log(step4Button);
step4Button.addEventListener("click", gotoStep4);

function gotoStep4() {
  myVideo.currentTime = 72;
}

const step5Button = document.querySelector("#step-5-button");
console.log(step5Button);
step5Button.addEventListener("click", gotoStep5);

function gotoStep5() {
  myVideo.currentTime = 94;
}

const step6Button = document.querySelector("#step-6-button");
console.log(step6Button);
step6Button.addEventListener("click", gotoStep6);

function gotoStep6() {
  myVideo.currentTime = 126;
}

const step7Button = document.querySelector("#step-7-button");
console.log(step7Button);
step7Button.addEventListener("click", gotoStep7);

function gotoStep7() {
  myVideo.currentTime = 155;
}

const step8Button = document.querySelector("#step-8-button");
console.log(step8Button);
step8Button.addEventListener("click", gotoStep8);

function gotoStep8() {
  myVideo.currentTime = 205;
}

const finalProductButton = document.querySelector("#final-product-button");
console.log(finalProductButton);
finalProductButton.addEventListener("click", gotofinalProduct);

function gotofinalProduct() {
  myVideo.currentTime = 233;
  // toggleText() {
  //   var text = document.getElementById("final-product-button");
  //   if (text.style.display === "none") {
  //     text.style.display = "block";
  //   } else {
  //     text.style.display = "none";
  //   }
  // ^This is the script version of my fail attempt to have texts appear when pressing the button.
}

// function toggleText() {
//   var text = document.getElementById("demo");
//   if (text.style.display === "none") {
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// }

// function toggleText() {
//   var text = document.getElementById("final-product-button");
//   if (text.style.display === "none") {
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// }
