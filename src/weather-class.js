export default class Weather {
  static async getWeather(cityName) {
    const coordinates = await fetch("../weather_testing/landstuhl-coords.json", {
      mode: "cors",
    });
    const weatherPromise = await fetch("../weather_testing/landstuhl-data.json", {
      mode: "cors",
    });

    const weatherData = await weatherPromise.json()
    
    return new Weather(weatherData);
  }


  constructor(weatherCity) {
    this.temp = weatherCity.main.temp;
    this.feelsLike = weatherCity.main.feels_like;
    this.humidity = weatherCity.main.humidity;
    this.country = weatherCity.sys.country;
    this.name = weatherCity.name;
    this.forecast = weatherCity.weather[0].description;
  }
}
