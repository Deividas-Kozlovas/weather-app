import handleWeatherFetch from "../services/WeatherApp";

export default class WeatherEvent {
  constructor() {
    this.cityInput = document.getElementById("cityInput");
    this.weatherButton = document.getElementById("weatherButton");

    this.bindEvents();
  }

  bindEvents() {
    this.weatherButton.addEventListener("click", (e) => {
      e.preventDefault();
      const city = this.cityInput.value.trim();

      if (!city) {
        console.error("Please enter a valid city.");
        return;
      }

      handleWeatherFetch(city);
    });
  }
}
