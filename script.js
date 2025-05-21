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
      mainContent.classList.add("fade-in-up"); // Apply a different animation class
    }, 1500); // tempo per leggere sottotitolo
  }
}

window.onload = () => {
  setTimeout(type, 300);

  // Stop waving animation after 5 seconds
  setTimeout(() => {
    const wavingHand = document.querySelector(".waving-hand");
    if (wavingHand) {
      wavingHand.classList.add("no-wave");
    }
  }, 5000);
};
