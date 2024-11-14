export default class WeatherApi {
  constructor(url) {
    this.url = url;
  }

  async fetchWeather() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      return data.main.temp;
    } catch (error) {
      console.error("Error fetching weather:", error);
      return null;
    }
  }
}
