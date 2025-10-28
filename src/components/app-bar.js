class AppBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            📒 Notes App
    `;
  }
}

customElements.define('app-bar', AppBar);
