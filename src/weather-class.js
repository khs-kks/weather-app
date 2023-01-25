export default class Weather {
  static async getWeather(cityName) {
    const coordinates = await fetch("../weather_testing/landstuhl-coords.json", {
      mode: "cors",
    });
    const weatherPromise = await fetch("../weather_testing/landstuhl-data.json", {
      mode: "cors",
    });

    const weatherData = await weatherPromise.json()
    console.log(weatherData);
  }
}
