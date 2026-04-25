const player = document.getElementById("player");
const scoreEl = document.getElementById("score");

let score = 0;
let watched = new Set();

function loadVideo(id) {
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`;

  if (!watched.has(id)) {
    watched.add(id);
    score += 10;
    scoreEl.textContent = score;
  }
