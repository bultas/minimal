import { render } from "lit-html";
import { fancyLoader } from "./templates.js";

export class FancyLoader extends HTMLElement {
  constructor() {
    super();
    this.node = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    render(fancyLoader(), this.node, { eventContext: this });
  }
}
