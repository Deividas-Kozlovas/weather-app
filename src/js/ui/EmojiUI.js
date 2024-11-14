export default class EmojiUI {
  constructor() {
    this.showTemperature = document.getElementById("showTemperature");
    this.showEmoji = document.getElementById("showEmoji");
  }

  displayWeather(temperature) {
    this.showTemperature.textContent = `Temperature: ${temperature}°C`;
    this.showEmoji.textContent = this.getEmoji(temperature);
  }

  getEmoji(temperature) {
    if (temperature >= 30) return "☀️";
    if (temperature >= 20) return "😎";
    if (temperature >= 10) return "☁️";
    return "❄️";
  }
}
