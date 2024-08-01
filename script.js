//code

const musicProgress = document.getElementById("music-progress");
const mainAudio = document.getElementById("main-audio");
const playIcon = document.getElementById("play-icon");

const playButton = document.querySelector(".play-button");

mainAudio.onloadedmetadata = function () {
  musicProgress.max = mainAudio.duration;
  musicProgress.value = mainAudio.currentTime;
};

const playPause = () => {
  if (playIcon.classList.contains("fa-pause")) {
    mainAudio.pause();
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
  } else {
    mainAudio.play();
    playIcon.classList.add("fa-pause");
    playIcon.classList.remove("fa-play");
  }
};

playButton.addEventListener("click", () => {
  playPause();
});

if (playIcon.classList.contains("fa-play")) {
  setInterval(() => {
    musicProgress.value = mainAudio.currentTime;
  }, 500);
}

musicProgress.onchange = function () {
  mainAudio.play();
  mainAudio.currentTime = musicProgress.value;
  playIcon.classList.add("fa-pause");
  playIcon.classList.remove("fa-play");
};
