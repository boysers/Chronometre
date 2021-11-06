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
let t;

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
  t = setInterval(inputAdd, 100);
}
chrono();

function inputReset() {
  hours = 0;
  inputHours.value = "00";

  minutes = 0;
  inputMinutes.value = "00";

  seconds = 0;
  inputSeconds.value = "00";
}
inputReset();

// Events
start.addEventListener("click", () => {
  chrono();
});

pause.addEventListener("click", () => {
  clearTimeout(t);
});

stop.addEventListener("click", () => {
  clearInterval(t);
  inputReset();

  centiSeconds = 0;
});
