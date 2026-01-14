const audio = document.getElementById("radioStream");
const playBtn = document.getElementById("playBtn");
const icon = playBtn.querySelector("i");
const player = document.getElementById("radioPlayer");
const toggleIcon = document.getElementById("toggleIcon");
let isPlaying = false;

function toggleRadio() {
  if (isPlaying) {
    audio.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
    isPlaying = false;
  } else {
    audio.play().catch((e) => console.log("Erro ao reproduzir:", e));
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
    isPlaying = true;
  }
}

function setVolume(val) {
  audio.volume = val;
}

function requestSong() {
  alert(
    "Sistema de pedidos em desenvolvimento! Em breve você poderá pedir suas músicas favoritas."
  );
}

function togglePlayerView() {
  player.classList.toggle("minimized");
  if (player.classList.contains("minimized")) {
    toggleIcon.classList.remove("fa-chevron-down");
    toggleIcon.classList.add("fa-radio");
  } else {
    toggleIcon.classList.remove("fa-radio");
    toggleIcon.classList.add("fa-chevron-down");
  }
}

function vote(type) {
  // Placeholder for vote logic
  const btns = document.querySelectorAll(".vote-btn");
  btns.forEach((b) => {
    b.classList.remove("liked", "disliked");
  });

  if (type === "like") {
    event.target.closest(".vote-btn").classList.add("liked");
    console.log("Curtiu o locutor!");
  } else {
    event.target.closest(".vote-btn").classList.add("disliked");
    console.log("Descurtiu o locutor!");
  }
}
