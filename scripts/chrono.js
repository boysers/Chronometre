import { heure, minute, seconde } from "./input.js";

let cs = 0;
let hour = 0;
let min = 0;
let sec = 0;

let chronoSetInterval;
let chronoPause = true;

function chrono() {
  cs++;

  conversionCStoTime();
  addInput();
}

function conversionCStoTime() {
  hour = Math.floor(cs / 36000);
  min = Math.floor((cs / 6000) % 60);
  sec = Math.floor((cs / 10) % 60);
}

function addInput() {
  heure.value = hour < 10 ? "0" + hour : hour;
  minute.value = min < 10 ? "0" + min : min;
  seconde.value = sec < 10 ? "0" + sec : sec;
}

export default class Chrono {
  reset() {
    cs = 0;
    hour = 0;
    min = 0;
    sec = 0;
  }

  resetInput() {
    heure.value = "";
    minute.value = "";
    seconde.value = "";
  }

  start() {
    if (!chronoPause) return;

    chronoSetInterval = setInterval(chrono, 100);
  }

  stop() {
    chronoPause = true;
    clearTimeout(chronoSetInterval);
    this.reset();
    this.resetInput();
  }

  pause() {
    chronoPause = true;
    clearTimeout(chronoSetInterval);
  }
}
