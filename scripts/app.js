import Chrono from "./chrono.js";

import Input from "./input.js";
const { addQuerySelector, add, reset, animateOfButton, titleOnglet } = Input;

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

  watch(buttonActiveID) {
    if (this.chronoPause && buttonActiveID === "pause") return;

    switch (buttonActiveID) {
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

    animateOfButton(buttonActiveID, button);
  }
}

const newChrono = new NewChrono();
// ---

const button = newChrono.button;

button.start.addEventListener("click", () => {
  newChrono.watch("start");
});

button.pause.addEventListener("click", () => {
  newChrono.watch("pause");
});

button.stop.addEventListener("click", () => {
  newChrono.watch("stop");
});
