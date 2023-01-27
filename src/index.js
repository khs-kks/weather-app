import Weather from "./weather-class";

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("show");
});

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

Weather.getWeather("Landstuhl");
