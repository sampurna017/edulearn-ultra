let score = 0;
let watchedCount = 0;
let currentType = "";
let qIndex = 0;

const quizData = {
  html:[
    {q:"HTML stands for?",a:"Hyper Text Markup Language",b:"Machine",c:"Tool",correct:"a"},
    {q:"<p> tag?",a:"Paragraph",b:"Image",c:"Link",correct:"a"}
  ],
  js:[
    {q:"JS used for?",a:"Style",b:"Logic",c:"DB",correct:"b"}
  ],
  python:[
    {q:"Python used for?",a:"AI",b:"Nothing",c:"Game",correct:"a"}
  ],
  cs:[
    {q:"CS50 from?",a:"Harvard",b:"MIT",c:"Google",correct:"a"}
  ]
};

function play(id,type){
  let player=document.getElementById("player");

  player.innerHTML=`<iframe src="https://www.youtube.com/embed/${id}?autoplay=1"></iframe>`;
  player.style.display="block";

  window.scrollTo({top:0,behavior:"smooth"});

  currentType = type;
  qIndex = 0;

  localStorage.setItem("lastVideo",JSON.stringify({id,type}));

  watchedCount++;
  localStorage.setItem("watched",watchedCount);

  updateStats();
  loadContinue();

  setTimeout(showQuiz,4000);
}

function showQuiz(){
  let q = quizData[currentType][qIndex];

  document.getElementById("quiz").innerHTML=`
    <h3>${q.q}</h3>
    <button onclick="answer('${q.correct}','a')">${q.a}</button>
    <button onclick="answer('${q.correct}','b')">${q.b}</button>
    <button onclick="answer('${q.correct}','c')">${q.c}</button>
    <p id="result"></p>
  `;
}

function answer(correct,ans){
  let r=document.getElementById("result");

  if(ans===correct){
    score++;
    localStorage.setItem("score",score);
    r.innerText="✅ Correct";
    showToast("Correct!");
  }else{
    r.innerText="❌ Wrong";
    showToast("Try again");
  }

  nextQuestion();
}

function nextQuestion(){
  qIndex++;
  if(qIndex < quizData[currentType].length){
    setTimeout(showQuiz,1000);
  }else{
    document.getElementById("quiz").innerHTML=`
      <h3>Quiz Done 🎉</h3>
      <p>Score: ${score}</p>
    `;
  }
}

function loadContinue(){
  let data=JSON.parse(localStorage.getItem("lastVideo"));
  if(!data) return;

  document.getElementById("continueGrid").innerHTML=`
    <div class="card" onclick="play('${data.id}','${data.type}')">
      <img src="https://img.youtube.com/vi/${data.id}/0.jpg">
      <p>Continue</p>
    </div>
  `;
}

document.getElementById("searchInput")?.addEventListener("input",function(){
  let val=this.value.toLowerCase();
  document.querySelectorAll(".card").forEach(c=>{
    c.style.display=c.dataset.title.includes(val)?"block":"none";
  });
});

function filterCategory(cat){
  document.querySelectorAll(".card").forEach(c=>{
    c.style.display=(cat==="all"||c.dataset.cat===cat)?"block":"none";
  });
}

function updateStats(){
  document.getElementById("watched").innerText =
    localStorage.getItem("watched") || 0;

  document.getElementById("totalScore").innerText =
    localStorage.getItem("score") || 0;
}

function showToast(msg){
  let t=document.createElement("div");
  t.className="toast";
  t.innerText=msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),1500);
}

window.onload=()=>{
  watchedCount = Number(localStorage.getItem("watched")) || 0;
  score = Number(localStorage.getItem("score")) || 0;

  loadContinue();
  updateStats();
};