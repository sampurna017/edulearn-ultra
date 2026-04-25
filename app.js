const player = document.getElementById("player");
const watched = document.getElementById("watched");

// Load YouTube video
function loadVideo(videoId) {
  player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  
  // increase count
  watched.textContent = parseInt(watched.textContent) + 1;
}

// Dark mode toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});