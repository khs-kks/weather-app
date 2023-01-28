export default class Weather {
  constructor(weatherCity) {
    this.temp = weatherCity.main.temp;
    this.feelsLike = weatherCity.main.feels_like;
    this.humidity = weatherCity.main.humidity;
    this.country = weatherCity.sys.country;
    this.name = weatherCity.name;
    this.forecast = weatherCity.weather[0].main;
  }

  static async getWeather(cityName) {
    const startTime = performance.now();

    try {
      const coordinatesPromise = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=c7ec069ee3e1e10a86949a8780463038`,
        {
          mode: "cors",
        }
      );
      const coordinates = await coordinatesPromise.json();

      const { lat } = coordinates[0];
      const { lon } = coordinates[0];
      
      const weatherPromise = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c7ec069ee3e1e10a86949a8780463038&units=metric`,
        {
          mode: "cors",
        }
      );

      const weatherData = await weatherPromise.json();

      const endTime = performance.now();
      const timeTaken = (endTime - startTime) / 1000;

      document.querySelector(
        ".fetch-time"
      ).textContent = `Response time: ${timeTaken.toFixed(3)}s`;

      if (weatherData) {
        // console.log(weatherData);
        return new Weather(weatherData);
      }
    } catch (error) {
      document.querySelector(".modal").style.display = "block";
      document.querySelector(".error-code").textContent = "Check your spelling. No city found!";
    }
  }
}
