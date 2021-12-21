/**
 * Boite à outil pour intéragire avec le DOM
 */
export default class Input {
  /**
   * Ajoute dans un objet les éléments avec comme nom son id |
   * `document.querySelector("#id")`
   * @param {array} array [ ]
   * @returns {object} Object
   */
  static addQuerySelector(array = []) {
    let object = {};

    for (let id of array) {
      object[id] = document.querySelector(`#${id}`);
    }
    return object;
  }

  /**
   * Pour le Chronomètre :
   * Ajoute les valeurs de l'objet time aux éléments :
   * `input.heure`, `input.minute`, `input.seconde`
   * @param {object} time
   * @param {object} input
   */
  static add(time, input) {
    let i = input;
    let t = time;

    i.heure.value = t.hour < 10 ? "0" + t.hour : t.hour;
    i.minute.value = t.min < 10 ? "0" + t.min : t.min;
    i.seconde.value = t.sec < 10 ? "0" + t.sec : t.sec;
  }

  /**
   * Pour le Chronomètre :
   * Retire les valeurs (value) des éléments (input) :
   * `input.heure`, `input.minute`, `input.seconde`
   * @param {object} input
   */
  static reset(input) {
    let i = input;

    i.heure.value = "";
    i.minute.value = "";
    i.seconde.value = "";
  }

  /**
   * Ajoute la class css btn-active du bouton et la retire pour les autres,
   * @param {string} buttonActiveID Bouton actif
   * @param {object} buttonList Liste des boutons
   */
  static animateOfButton(buttonActiveID, buttonList) {
    let button = buttonList;

    for (let i in button) {
      if (button[i].id && buttonActiveID != button[i].id) {
        button[i].classList.remove("btn-active");
      } else {
        button[i].classList.add("btn-active");
      }
    }
  }
}
