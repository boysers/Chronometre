/**
 * Ajoute dans un objet les éléments avec comme nom son id |
 * `document.querySelector("#id")`
 * @param {array} array [ ]
 * @returns {object} Object
 */
export const addQuerySelector = (array = []) => {
  let object = {};

  for (let id of array) {
    object[id] = document.querySelector(`#${id}`);
  }
  return object;
};

/**
 * Pour le Chronomètre :
 * Ajoute les valeurs de l'objet time aux éléments :
 * `input.heure`, `input.minute`, `input.seconde`
 * @param {object} time
 * @param {object} input
 */
export const add = (time, input) => {
  let i = input;
  let t = time;

  i.heure.value = t.hour < 10 ? "0" + t.hour : t.hour;
  i.minute.value = t.min < 10 ? "0" + t.min : t.min;
  i.seconde.value = t.sec < 10 ? "0" + t.sec : t.sec;
};

/**
 * Pour le Chronomètre :
 * Retire les valeurs (value) des éléments (input) :
 * `input.heure`, `input.minute`, `input.seconde`
 * @param {object} input
 */
export const reset = (input) => {
  let i = input;

  i.heure.value = "";
  i.minute.value = "";
  i.seconde.value = "";
};

/**
 * Ajoute la class css btn-active du bouton et la retire pour les autres,
 * @param {string} buttonActiveID Bouton actif
 * @param {object} buttonList Liste des boutons
 */
export const animateOfButton = (buttonActiveID, buttonList) => {
  let button = buttonList;

  for (let i in button) {
    if (button[i].id && buttonActiveID != button[i].id) {
      button[i].classList.remove("btn-active");
    } else {
      button[i].classList.add("btn-active");
    }
  }
};

/**
 * Pour le Chronomètre :
 * Ajoute les valeurs de l'objet time dans le titre de la page :
 * `input.heure`, `input.minute`, `input.seconde` et input.cs
 * @param {object} time
 */
export const titleOnglet = (time) => {
  let t = time;

  let hours = t.hour < 10 ? "0" + t.hour : t.hour;
  let minutes = t.min < 10 ? "0" + t.min : t.min;
  let seconds = t.sec < 10 ? "0" + t.sec : t.sec;
  let cs = t.cs < 10 ? "0" + t.cs : t.cs;

  document.title = `${hours}h${minutes}:${seconds}.${cs}`;
};
