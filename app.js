const player = document.getElementById("player");
const scoreEl = document.getElementById("score");
const titleEl = document.getElementById("videoTitle");

let score = localStorage.getItem("score") || 0;
let watched = JSON.parse(localStorage.getItem("watched")) || [];

scoreEl.textContent = score;

function loadVideo(id, title) {
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  titleEl.textContent = title;

  if (!watched.includes(id)) {
    watched.push(id);
    score = parseInt(score) + 10;

    localStorage.setItem("score", score);
    localStorage.setItem("watched", JSON.stringify(watched));

    scoreEl.textContent = score;
  }
}