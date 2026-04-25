const player = document.getElementById("player");
const scoreEl = document.getElementById("score");

let score = 0;
let watchedVideos = new Set();

// Load video + scoring
function loadVideo(videoId) {
  player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  // Add score only if new video
  if (!watchedVideos.has(videoId)) {
    watchedVideos.add(videoId);
    score += 10;
    scoreEl.textContent = score;
  }
}