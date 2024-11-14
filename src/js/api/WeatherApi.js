export default class WeatherApi {
  constructor(url) {
    this.url = url;
  }

  async fetchchWeather(city) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json;
      return data.main.temp;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
