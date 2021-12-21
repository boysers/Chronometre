import Chrono from "./chrono.js";

import Input from "./input.js";
const { addQuerySelector, add, reset } = Input;

// ---
class NewChrono extends Chrono {
  constructor() {
    super();

    this.button = addQuerySelector(["start", "pause", "stop"]);

    this.input = addQuerySelector(["heure", "minute", "seconde"]);
    this.watchTimer = () => {
      add(this.time, this.input);
    };
  }

  watch(buttonID) {
    if (this.chronoPause && buttonID === "pause") return;

    switch (buttonID) {
      case "start":
        this.start();
        break;
      case "pause":
        this.pause();
        break;
      default:
        this.stop();
        reset(this.input);
    }

    this.animateOfButton(buttonID);
  }

  animateOfButton(buttonID) {
    let button = this.button;
    for (let i in button) {
      if (button[i].id && buttonID != button[i].id) {
        button[i].classList.remove("btn-active");
      } else {
        button[i].classList.add("btn-active");
      }
    }
  }
}

const newChrono = new NewChrono();
// ---

const button = addQuerySelector(["start", "pause", "stop"]);

button.start.addEventListener("click", () => {
  newChrono.watch("start");
});

button.pause.addEventListener("click", () => {
  newChrono.watch("pause");
});

button.stop.addEventListener("click", () => {
  newChrono.watch("stop");
});
