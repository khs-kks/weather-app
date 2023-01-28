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
  static temperatureUnit = "celsius";

  static init() {
    UI.addListeners();
  }

  static addListeners() {
    document.addEventListener("DOMContentLoaded", () => {
      document.body.classList.add("show");
    });

    closeModal.addEventListener("click", UI.hideModal);

    document.addEventListener("keydown", UI.hideModal);

    modal.addEventListener("click", UI.hideModal);

    searchButton.addEventListener("click", async (event) => {
      event.preventDefault();
      let normalizedSearch = UI.normalizeSearch(searchBar.value);
      if (!normalizedSearch.length) {
        normalizedSearch = "sofia";
      }
      try {
        weatherObject = await Weather.getWeather(normalizedSearch);
        if (weatherObject instanceof Weather) {
          UI.render();
        }
      } catch (error) {
        console.log("Weather object is not returned");
      }
    });

    celsiusOption.addEventListener("click", UI.setTemperatureUnit);

    fahrenheitOption.addEventListener("click", UI.setTemperatureUnit);
  }

  static hideModal(event) {
    if (
      event.key === "Escape" ||
      event.target === modal ||
      event.target === closeModal
    ) {
      modal.style.display = "none";
    }
  }

  static normalizeSearch(query) {
    return query.trim().toLowerCase().replace(/\s+/g, "+");
  }

  static setTemperatureUnit(event) {
    UI.temperatureUnit = event.target.value;
    if (weatherObject instanceof Weather) {
      UI.render();
    }
  }

  static celsiusToFahrenheit(tempCelsius) {
    return ((tempCelsius * 9) / 5 + 32).toFixed(1);
  }

  static render() {
    if (UI.temperatureUnit === "fahrenheit") {
      tempResult.textContent = `${UI.celsiusToFahrenheit(
        weatherObject.temp
      )}${fahrenheitSymbol}`;

      feelsResult.textContent = `${UI.celsiusToFahrenheit(
        weatherObject.feelsLike
      )}${fahrenheitSymbol}`;
    } else {
      tempResult.textContent = weatherObject.temp + celsiusSymbol;
      feelsResult.textContent = weatherObject.feelsLike + celsiusSymbol;
    }

    city.textContent = weatherObject.name;
    country.textContent = weatherObject.country;
    humidityResult.textContent = weatherObject.humidity;
    skyResult.textContent = weatherObject.forecast;
  }
}
