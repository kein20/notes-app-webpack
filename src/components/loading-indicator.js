// src/components/loading-indicator.js

class LoadingIndicator extends HTMLElement {
  connectedCallback() {
    // Pastikan di dalamnya ada div dengan class "loader"
    this.innerHTML = `<div class="loader"></div>`;
    this.style.display = 'none';
  }

  show() {
    this.style.display = 'flex';
  }

  hide() {
    this.style.display = 'none';
  }
}

customElements.define('loading-indicator', LoadingIndicator);
