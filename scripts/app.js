import Chrono from "./Chrono.js";

import { heure, minute, seconde } from "./input.js";
import { start, pause, stop } from "./input.js";

import animateOfButton from "./animateOfButton.js";

let time;
const watchTimer = (value) => {
  time = value;
  inputAdd(time);
};

const chrono = new Chrono(watchTimer);

function inputAdd(time) {
  heure.value = time.hour < 10 ? "0" + time.hour : time.hour;
  minute.value = time.min < 10 ? "0" + time.min : time.min;
  seconde.value = time.sec < 10 ? "0" + time.sec : time.sec;
}

function inputReset() {
  heure.value = "";
  minute.value = "";
  seconde.value = "";
}

start.addEventListener("click", () => {
  chrono.start();

  animateOfButton("start");
});

pause.addEventListener("click", () => {
  chrono.pause();

  animateOfButton("pause");
});

stop.addEventListener("click", () => {
  chrono.stop();

  inputReset();

  animateOfButton("stop");
});
