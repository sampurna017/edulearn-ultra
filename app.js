const player = document.getElementById("player");
const scoreEl = document.getElementById("score");
const titleEl = document.getElementById("title");

let score = 0;
let watched = new Set();

function loadVideo(id, title) {
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  titleEl.textContent = title;

  if (!watched.has(id)) {
    watched.add(id);
    score += 10;
    scoreEl.textContent = score;
  }
}