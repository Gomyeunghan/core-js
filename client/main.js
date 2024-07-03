class Button extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' }); // 생성된 컴포넌트를 가르킴
    this.shadowRoot.innerHTML = `
    <button>Hello</button>`;
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

customElements.define('c-button', Button);

console.log(
  document.querySelector('c-button').shadowRoot.querySelector('button')
);
