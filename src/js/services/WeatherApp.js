import WeatherApi from "../api/WeatherApi";
import EmojiUI from "../ui/EmojiUI";
import RenderError from "../ui/RenderError";
export default async function handleWeatherFetch(
  city,
  weatherApi = new WeatherApi(),
  emojiUI = new EmojiUI(),
  renderError = new RenderError()
) {
  const apiKey = process.env.API_KEY;
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const url = `${baseUrl}&units=metric`;

  try {
    emojiUI.clearWeather();
    renderError.clearError();

    let temperature = await weatherApi.fetchWeather(url);

    if (temperature === null) {
      renderError.displayError("Failed to fetch weather data.");
      return;
    }

    temperature = Math.floor(temperature);

    emojiUI.displayWeather(temperature);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    renderError.displayError("An error occurred while fetching weather data.");
  }
}
