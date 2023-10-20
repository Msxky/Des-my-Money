// SOAL PERTAMA
const audioPertama1 = new Audio("assets/sound/soal-latihan/Soal-pertama.mp3");
function soal1() {
  audioPertama1.play();
  audioPertama2.pause();
}

const audioPertama2 = new Audio(
  "assets/sound/soal-latihan/Options-pertama.mp3"
);
function opsi1() {
  audioPertama2.play();
  audioPertama1.pause();
}

// SOAL KEDUA
const audioKedua1 = new Audio("assets/sound/soal-latihan/Soal-kedua.mp3");
function soal2() {
  audioKedua1.play();
  audioKedua2.pause();
}

const audioKedua2 = new Audio("assets/sound/soal-latihan/Options-kedua.mp3");
function opsi2() {
  audioKedua2.play();
  audioKedua1.pause();
}

const audioKetiga1 = new Audio("assets/sound/soal-latihan/Soal-ketiga.mp3");
// SOAL KETIGA
function soal3() {
  audioKetiga1.play();
  audioKetiga2.pause();
}

const audioKetiga2 = new Audio("assets/sound/soal-latihan/Options-ketiga.mp3");
function opsi3() {
  audioKetiga2.play();
  audioKetiga1.pause();
}

// SOAL KEEMPAT
const audioKeempat1 = new Audio("assets/sound/soal-latihan/Soal-keempat.mp3");
function soal4() {
  audioKeempat1.play();
  audioKeempat2.pause();
}

const audioKeempat2 = new Audio(
  "assets/sound/soal-latihan/Options-keempat.mp3"
);
function opsi4() {
  audioKeempat2.play();
  audioKeempat1.pause();
}

// SOAL KELIMA
const audioKelima1 = new Audio("assets/sound/soal-latihan/Soal-kelima.mp3");
function soal5() {
  audioKelima1.play();
  audioKelima2.pause();
}

const audiokelima2 = new Audio("assets/sound/soal-latihan/Options-kelima.mp3");
function opsi5() {
  audiokelima2.play();
  audiokelima1.pause();
}

// SOAL KEENAM
function soal6() {
  const audio = new Audio("assets/sound/soal-latihan/Soal-keenam.mp3");
  audio.play();
}

// function opsi6() {
//   const audio = new Audio("assets/sound/soal-latihan/Options-keenam.mp3");
//   audio.play();
// }

// SOAL KETUJUH
function soal7() {
  const audio = new Audio("assets/sound/soal-latihan/Soal-ketujuh.mp3");
  audio.play();
}

// function opsi7() {
//   const audio = new Audio("assets/sound/soal-latihan/Options-ketujuh.mp3");
//   audio.play();
// }
