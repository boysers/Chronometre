let ongletParametre = document.querySelector("#onglet-parametre").style;

function displayOngletParametre() {
  if (ongletParametre.display === "none")
    return (ongletParametre.display = "block");

  ongletParametre.display = "none";
}

export default displayOngletParametre;
