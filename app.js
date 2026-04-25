const player = document.getElementById("player");

// Load YouTube video
function loadVideo(videoId) {
  player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}