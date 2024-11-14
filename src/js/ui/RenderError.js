export default class RenderError {
  constructor() {
    this.errorContainer = document.getElementById("showError");
  }

  displayError(message) {
    this.clearError();

    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;

    this.errorContainer.appendChild(errorMessage);
  }

  clearError() {
    if (this.errorContainer) {
      this.errorContainer.innerHTML = "";
    }
  }
}
