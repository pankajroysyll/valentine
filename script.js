function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.fontSize = Math.random()*20 + 15 + "px";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),8000);
}
setInterval(createHeart, 300);

// No button runs away
const noBtn = document.getElementById("noBtn");
const messages = ["Nope 😝","Try again!","Not happening!","Think again!"];
let msgIndex = 0;

function moveNo() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.innerHTML = messages[msgIndex];
  msgIndex = (msgIndex+1)%messages.length;
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

// Yes button celebration
document.getElementById("yesBtn").onclick = function() {
  const celebrateDiv = document.getElementById("celebrate");
  celebrateDiv.style.display = "block";
  document.body.style.overflow = "hidden";
  celebrateDiv.style.position = "fixed";
  celebrateDiv.style.zIndex = "1000";
};