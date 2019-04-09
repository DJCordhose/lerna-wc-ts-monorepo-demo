import { LitElement, html, property, customElement, css } from 'lit-element';

@customElement('other-element')
export class SimpleGreeting extends LitElement {
  @property() name = 'World';

  static get styles() {
    return css`
    :host {
      display: block;
      border: 5px red solid;
      margin: 10px 10px;
      padding: 1rem 4rem;
      font-size: 1.5rem;
    }`;
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}