import WeatherApi from "./api/WeatherApi";
import WeatherEvent from "./events/WeatherEvent ";
import EmojiUI from "./ui/EmojiUI";

document.addEventListener("DOMContentLoaded", () => {
  new WeatherEvent();
});

export default async function handleWeatherFetch(city) {
  const apiKey = process.env.API_KEY;
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const url = `${baseUrl}&units=metric`;

  try {
    const weatherApi = new WeatherApi();
    let temperature = await weatherApi.fetchWeather(url);
    temperature = Math.floor(temperature);

    if (temperature === null) {
      console.error("Failed to fetch weather data.");
      return;
    }

    const displayWeather = new EmojiUI();
    displayWeather.displayWeather(temperature);
  } catch (error) {
    console.error("Error:", error);
  }
}
