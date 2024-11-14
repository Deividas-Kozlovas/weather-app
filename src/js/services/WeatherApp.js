import WeatherApi from "../api/WeatherApi";
import EmojiUI from "../ui/EmojiUI";

export default async function handleWeatherFetch(city) {
  const apiKey = process.env.API_KEY;
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const url = `${baseUrl}&units=metric`;

  try {
    const weatherApi = new WeatherApi(url);
    let temperature = await weatherApi.fetchWeather();
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