export default class Weather {
  static async getWeather(cityName) {
    const startTime = performance.now();

    try {
      const coordinates = await fetch(
        "../weather_testing/landstuhl-coords.json",
        {
          mode: "cors",
        }
      );
      const weatherPromise = await fetch(
        "../weather_testing/landstuhl-data.json",
        {
          mode: "cors",
        }
      );

      const weatherData = await weatherPromise.json();

      const endTime = performance.now();
      const timeTaken = (endTime - startTime) / 1000;

      document.querySelector(".fetch-time").textContent = `Response time: ${timeTaken.toFixed(3)}s`  ;

      return new Weather(weatherData);
    } catch (error) {
      console.log(error);
      document.querySelector(".modal").style.display = "block";
      document.querySelector(".error-code").textContent = error.code;
    }
  }

  constructor(weatherCity) {
    this.temp = weatherCity.main.temp;
    this.feelsLike = weatherCity.main.feels_like;
    this.humidity = weatherCity.main.humidity;
    this.country = weatherCity.sys.country;
    this.name = weatherCity.name;
    this.forecast = weatherCity.weather[0].main;
  }
}
