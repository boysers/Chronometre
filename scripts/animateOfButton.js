const buttons = document.querySelectorAll(".btn-style");

let buttonID;

function animateOfButton(value) {
  buttonID = value;

  for (let button of buttons) {
    if (buttonID === "parametre") {
      if (button.classList.contains("btn-active")) {
        return button.classList.remove("btn-active");
      }

      return button.classList.add("btn-active");
    } else if ("parametre" != button.id && buttonID != button.id) {
      button.classList.remove("btn-active");
    } else if (buttonID === button.id) {
      button.classList.add("btn-active");
    }
  }
}

export default animateOfButton;
