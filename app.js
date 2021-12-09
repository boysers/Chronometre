import { displayParams } from "./params.js";

// Inputs
const inputHours = document.querySelector("#hours");
const inputMinutes = document.querySelector("#minutes");
const inputSeconds = document.querySelector("#seconds");
const inputTravail = document.querySelector("#travail");
const inputModeTravail = document.querySelector("#mode-travail");

// Boutons
const start = document.querySelector("#btn-start");
const pause = document.querySelector("#btn-pause");
const stop = document.querySelector("#btn-stop");
const params = document.querySelector("#btn-params");

// Variables
let centiSeconds = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let timeChrono;
let chronoPause = true;

let centiTravail = 0;
let travail = 0;
let modeTravail = false;
let minutesTravail = 20;
let minutesPause = 5;

// Fonctions
function convCS() {
  centiSeconds++;

  hours = Math.floor(centiSeconds / 36000);
  minutes = Math.floor((centiSeconds / 600) % 60);
  seconds = Math.floor((centiSeconds / 10) % 60);

  if (modeTravail) {
    centiTravail++;

    travail = Math.floor(
      (centiTravail / 600) % (minutesTravail + minutesPause)
    );
  }
}

function inputAdd() {
  inputHours.value = hours < 10 ? "0" + hours : hours;
  inputMinutes.value = minutes < 10 ? "0" + minutes : minutes;
  inputSeconds.value = seconds < 10 ? "0" + seconds : seconds;

  convCS();

  if (modeTravail) {
    inputTravail.value = travail < 10 ? "0" + travail : travail;
  }
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

  travail = 0;
  inputTravail.value = "";
}

// Events
start.addEventListener("click", (e) => {
  e.preventDefault();
  if (!chronoPause) return;

  if (!inputModeTravail.checked) {
    modeTravail = false;

    travail = 0;
    inputTravail.value = "";
  } else {
    modeTravail = true;
  }

  chronoPause = false;
  chrono();
});

pause.addEventListener("click", () => {
  chronoPause = true;

  clearTimeout(timeChrono);
});

stop.addEventListener("click", () => {
  clearInterval(timeChrono);
  inputReset();

  chronoPause = true;

  centiSeconds = 0;
  centiTravail = 0;
});

params.addEventListener("click", () => {
  displayParams();
});
