class Button extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

customElements.define('c-button', Button, { extends: 'button' });
