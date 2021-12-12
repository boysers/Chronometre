import { start, pause, stop, parametre } from "./input.js";
import Chrono from "./chrono.js";
import displayOngletParametre from "./parametre.js";
import animateOfButton from "./animateOfButton.js";

const chrono = new Chrono();

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

  animateOfButton("stop");
});

parametre.addEventListener("click", () => {
  displayOngletParametre();

  animateOfButton("parametre");
});
