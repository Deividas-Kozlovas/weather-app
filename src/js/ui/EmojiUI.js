export default class EmojiUI {
  constructor() {
    this.showTemperature = document.getElementById("showTemperature");
    this.showEmoji = document.getElementById("showEmoji");
  }

  displayWeather(temperature) {
    this.showTemperature.textContent = `Temperature: ${temperature}°C`;
    this.showEmoji.textContent = this.getEmoji(temperature);
  }

  clearWeather() {
    this.showTemperature.textContent = "";
    this.showEmoji.textContent = "";
  }

  getEmoji(temperature) {
    let emoji;
    if (temperature >= 25) {
      emoji = "🌞";
    } else if (temperature >= 15) {
      emoji = "🌤️";
    } else if (temperature >= 5) {
      emoji = "☁️";
    } else {
      emoji = "❄️";
    }
    return emoji;
  }
}
