import WeatherApi from "./api/WeatherApi";
require("dotenv").config();

(async () => {
  try {
    const apiKey = process.env.API_KEY;
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;
    const url = `${baseUrl}&units=metric`;
    const weatherApi = new WeatherApi();
    const temperature = await weatherApi.fetchWeather(url);

    if (temperature === null) {
      console.error("Failed to fetch weather data.");
      return;
    }

    console.log(`Current temperature in London: ${temperature}°C`);
  } catch (error) {
    console.error("Error:", error);
  }
})();
