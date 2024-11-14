import handleWeatherFetch from "../services/WeatherApp";
import EmojiUI from "../ui/EmojiUI";
import RenderError from "../ui/RenderError";

export default class WeatherEvent {
  constructor() {
    this.cityInput = document.getElementById("cityInput");
    this.weatherButton = document.getElementById("weatherButton");

    this.renderError = new RenderError();
    this.bindEvents();
  }

  bindEvents() {
    this.weatherButton.addEventListener("click", (e) => {
      e.preventDefault();
      const clearWeather = new EmojiUI();
      clearWeather.clearWeather();
      const city = this.cityInput.value.trim();

      this.renderError.clearError();
      if (!city) {
        this.renderError.displayError("Please enter a valid city.");
        return;
      }

      handleWeatherFetch(city);
    });
  }
}
