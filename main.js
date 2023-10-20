const btn = document.getElementById("btn");
const audio = new Audio("assets/sound/ciri-mata-uang.mp3");

function mataUang() {
  console.log("diklik");
  audio.play();
  btn.innerHTML = "Loading..";

  setTimeout(function() {
    location.href = "materi.html";
  }, 5000);
}

function materi(){
  let materi = document.getElementById("materi");
  materi.innerHTML="Klik MULAI"
  setTimeout(function() {
    materi.style.display='none'
  }, 2000);
}

function latihan(){
  let latihan = document.getElementById("latihan");
  latihan.innerHTML="Klik MULAI"
  setTimeout(function() {
    latihan.style.display='none'
  }, 2000);
}

// DARKMODE
const toggle = document.querySelector(".dark-mode");
const siang = document.querySelector(".bxs-sun");
const malam = document.querySelector(".bxs-moon");

malam.style.display = "none";


toggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode-js");
  if (document.body.classList.contains("dark-mode-js")) {
    siang.style.display = "none";
    malam.style.display = "block";
  } else {
    malam.style.display = "none";
    siang.style.display = "block";
  }
});
