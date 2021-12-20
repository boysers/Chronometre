const buttons = document.querySelectorAll(".btn-style");

let buttonID;

function animateOfButton(value) {
  buttonID = value;

  for (let button of buttons) {
    if (button.id && buttonID != button.id) {
      button.classList.remove("btn-active");
    } else if (buttonID === button.id) {
      button.classList.add("btn-active");
    }
  }
}

export default animateOfButton;
