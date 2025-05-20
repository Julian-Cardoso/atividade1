let index = 0;
const temas = ["style.css", "style2.css"];

function swapTheme() {
  index = (index + 1) % temas.length;
  document.getElementById("theme").href = temas[index];
}
