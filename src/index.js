import Weather from "./weather-class";

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("show");
});

Weather.getWeather("Landstuhl");
