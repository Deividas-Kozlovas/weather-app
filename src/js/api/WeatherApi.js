export default class WeatherApi {
  async fetchWeather(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      return data.main.temp;
    } catch (error) {
      console.error("Error fetching weather:", error);
      return null;
    }
  }
}
