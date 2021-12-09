export function displayParams() {
  const params = document.querySelector("#params").style;

  if (params.display === "none") {
    params.display = "flex";
  } else {
    params.display = "none";
  }
}
