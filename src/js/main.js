require("dotenv").config();

import WeatherApi from "./api/WeatherApi";
import EmojiUI from "./ui/EmojiUI";

(async () => {
  try {
    const apiKey = process.env.API_KEY;
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;
    const url = `${baseUrl}&units=metric`;
    const weatherApi = new WeatherApi();
    let temperature = await weatherApi.fetchWeather(url);
    temperature = Math.floor(temperature);

    if (temperature === null) {
      console.error("Failed to fetch weather data.");
      return;
    }

    console.log(`Current temperature in London: ${temperature}°C`);
    const displayWeather = new EmojiUI();
    displayWeather.displayWeather(temperature);
  } catch (error) {
    console.error("Error:", error);
  }
})();
