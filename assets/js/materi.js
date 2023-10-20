
function deskripsiUang(){
  const btn = document.getElementById("btn");
  const audio = new Audio("assets/sound/deskripsi-uang.mp3");
  audio.play();
  btn.innerHTML = "Loading..";

  setTimeout(function() {
    location.href = "materi/deskripsi-uang.html";
  }, 3000);
}

function alatTulis(){
  const btn2 = document.getElementById("btn2");
  const audio = new Audio("assets/sound/daftar-alat-tulis.mp3");
  audio.play();
  btn2.innerHTML = "Loading..";

  setTimeout(function() {
    location.href = "materi/daftar-alat-tulis.html";
  }, 3000);
}

function kataKunci(){
  const btn3 = document.getElementById("btn3");
  const audio = new Audio("assets/sound/kata-kunci-dalam-soal-cerita.mp3");
  audio.play();
  btn3.innerHTML = "Loading..";

  setTimeout(function() {
    location.href = "materi/kata-kuci-dalam-soal-cerita.html";
  }, 3000);
}