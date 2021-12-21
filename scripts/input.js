export default class Input {
  constructor() {
    this.buttonID;
  }
  /**
   * document.querySelector(`#toto`)
   * @param {array} array [ ]
   * @returns {object} Object.element#toto
   */
  static addQuerySelector(array = []) {
    let inputs = {};
    for (let id of array) {
      inputs[id] = document.querySelector(`#${id}`);
    }
    return inputs;
  }

  static add(time, input) {
    let i = input;
    let t = time;

    i.heure.value = t.hour < 10 ? "0" + t.hour : t.hour;
    i.minute.value = t.min < 10 ? "0" + t.min : t.min;
    i.seconde.value = t.sec < 10 ? "0" + t.sec : t.sec;
  }

  static reset(input) {
    let i = input;

    i.heure.value = "";
    i.minute.value = "";
    i.seconde.value = "";
  }
}
