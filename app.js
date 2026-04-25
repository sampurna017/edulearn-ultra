function play(id,type){
  let player = document.getElementById("player");

  player.innerHTML = `
    <iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0"
    allowfullscreen></iframe>
  `;

  player.style.display = "block";

  window.scrollTo({top:0,behavior:"smooth"});
}