const text = "enri.bocco";
const typed = document.getElementById("typed");
const mainContent = document.getElementById("main-content");

let i = 0;

function type() {
  if (i < text.length) {
    typed.textContent += text.charAt(i);
    i++;
    setTimeout(type, 150);
  } else {
    setTimeout(() => {
      document.querySelector(".intro").style.display = "none";
      mainContent.classList.remove("hidden");
    }, 1500); // tempo per leggere sottotitolo
  }
}

window.onload = () => {
  setTimeout(type, 300);
};
