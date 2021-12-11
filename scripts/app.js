import { start, pause, stop, parametre } from "./input.js";
import Chrono from "./chrono.js";
import displayOngletParametre from "./parametre.js";

const chrono = new Chrono();

start.addEventListener("click", () => {
  chrono.start();
});

pause.addEventListener("click", () => {
  chrono.pause();
});

stop.addEventListener("click", () => {
  chrono.stop();
});

parametre.addEventListener("click", () => {
  displayOngletParametre();
});
