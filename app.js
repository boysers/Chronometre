// Inputs
const inputHours = document.querySelector("#hours");
const inputMinutes = document.querySelector("#minutes");
const inputSeconds = document.querySelector("#seconds");

// Boutons
const start = document.querySelector("#btn-start");
const pause = document.querySelector("#btn-pause");
const stop = document.querySelector("#btn-stop");

// Variables
let centiSeconds = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let timeChrono;
let chronoStart = false;
let chronoPause = true;

// Fonctions
function convCS() {
  centiSeconds++;

  hours = Math.floor(centiSeconds / 36000);
  minutes = Math.floor((centiSeconds / 600) % 60);
  seconds = Math.floor((centiSeconds / 10) % 60);
}

function inputAdd() {
  inputHours.value = hours < 10 ? "0" + hours : hours;
  inputMinutes.value = minutes < 10 ? "0" + minutes : minutes;
  inputSeconds.value = seconds < 10 ? "0" + seconds : seconds;

  convCS();
}

function chrono() {
  timeChrono = setInterval(inputAdd, 100);
}
// chrono();

function inputReset() {
  hours = 0;
  inputHours.value = "";

  minutes = 0;
  inputMinutes.value = "";

  seconds = 0;
  inputSeconds.value = "";
}

// Events
start.addEventListener("click", () => {
  if (!chronoPause && chronoStart) return;
  chronoStart = true;
  chronoPause = false;
  chrono();
});

pause.addEventListener("click", () => {
  chronoPause = true;
  chronoStart = false;
  clearTimeout(timeChrono);
});

stop.addEventListener("click", () => {
  clearInterval(timeChrono);
  inputReset();
  chronoPause = true;
  chronoStart = false;

  centiSeconds = 0;
});
