// Timer
let heure = addQuerySelector("#heure");
let minute = addQuerySelector("#minute");
let seconde = addQuerySelector("#seconde");

// Button
let start = addQuerySelector("#start");
let pause = addQuerySelector("#pause");
let stop = addQuerySelector("#stop");
let parametre = addQuerySelector("#parametre");
parametre = undefined;

function addQuerySelector(value) {
  let i = document.querySelector(value);

  return i ? i : undefined;
}

export { heure, minute, seconde, start, pause, stop, parametre };
