import Weather from "./weather-class";

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");

const searchBar = document.querySelector("#search");
const searchButton = document.querySelector(".search-button");

const city = document.querySelector(".city");
const country = document.querySelector(".country");
const tempResult = document.querySelector(".temp-result");
const humidityResult = document.querySelector(".hum-result");
const feelsResult = document.querySelector(".feels-result");
const skyResult = document.querySelector(".sky-result");

// const responseTime = document.querySelector(".fetch-time");

const celsiusOption = document.querySelector("#option1");
const fahrenheitOption = document.querySelector("#option2");

const celsiusSymbol = String.fromCharCode(8451);
const fahrenheitSymbol = String.fromCharCode(8457);

let weatherObject;

export default class UI {
  static init() {
    UI.addListeners();
  }

  static addListeners() {
    document.addEventListener("DOMContentLoaded", () => {
      document.body.classList.add("show");
    });

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

    searchButton.addEventListener("click", async (event) => {
      event.preventDefault();
      let normalizedSearch = searchBar.value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "+");

      if (!normalizedSearch.length) {
        normalizedSearch = "sofia";
      }

      weatherObject = await Weather.getWeather(normalizedSearch);

      if (weatherObject instanceof Weather) {
        UI.render();
      } else {
        console.log("Weather object is not returned");
      }
    });

    celsiusOption.addEventListener("click", () => {
      if (weatherObject instanceof Weather) {
        UI.render();
      }
    });

    fahrenheitOption.addEventListener("click", () => {
      if (weatherObject instanceof Weather) {
        UI.render();
      }
    //   UI.render();
    });
  }

  static celsiusToFahrenheit(tempCelsius) {
    // const cleanedTemp = tempCelsius.replace(/[^\d.]/g, "");
    return ((tempCelsius * 9) / 5 + 32).toFixed(1);
  }

  static render() {
    if (fahrenheitOption.checked) {
      tempResult.textContent = "";
      tempResult.textContent = `${UI.celsiusToFahrenheit(
        weatherObject.temp
      )}${fahrenheitSymbol}`;

      feelsResult.textContent = "";
      feelsResult.textContent = `${UI.celsiusToFahrenheit(
        weatherObject.feelsLike
      )}${fahrenheitSymbol}`;
    } else {
      tempResult.textContent = "";
      tempResult.textContent = weatherObject.temp + celsiusSymbol;

      feelsResult.textContent = "";
      feelsResult.textContent = weatherObject.feelsLike + celsiusSymbol;
    }

    city.textContent = weatherObject.name;
    country.textContent = weatherObject.country;
    // tempResult.textContent = weatherObject.temp;
    // feelsResult.textContent = weatherObject.feelsLike;
    humidityResult.textContent = weatherObject.humidity;
    skyResult.textContent = weatherObject.forecast;
  }
}
