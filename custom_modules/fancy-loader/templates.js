import { html } from "lit-html";

const style = html`
  <style>
    :host {
      all: initial;
      contain: content;
      display: block;
    }

    @-webkit-keyframes rotate {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50% {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes rotate {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50% {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @-webkit-keyframes rotate2 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        border-top-color: rgba(0, 0, 0, 0.5);
      }
      50% {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
        border-top-color: rgba(0, 0, 255, 0.5);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        border-top-color: rgba(0, 0, 0, 0.5);
      }
    }
    @keyframes rotate2 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        border-top-color: rgba(0, 0, 0, 0.5);
      }
      50% {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
        border-top-color: rgba(0, 0, 255, 0.5);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        border-top-color: rgba(0, 0, 0, 0.5);
      }
    }
    * {
      box-sizing: border-box;
    }

    body {
      background: #f9f9f9;
      padding-bottom: 100px;
    }

    h1,
    h3 {
      display: block;
      margin: 0px auto;
      text-align: center;
      font-family: "Tahoma";
      font-weight: lighter;
      color: rgba(0, 0, 0, 0.5);
      letter-spacing: 1.5px;
    }

    h1 {
      margin: 50px auto;
    }

    .loader {
      position: relative;
      margin: 75px auto;
      width: 150px;
      height: 150px;
      display: block;
      overflow: hidden;
    }
    .loader div {
      height: 100%;
    }

    /* loader 1 */
    .loader1,
    .loader1 div {
      border-radius: 50%;
      padding: 8px;
      border: 2px solid transparent;
      -webkit-animation: rotate linear 3.5s infinite;
      animation: rotate linear 3.5s infinite;
      border-top-color: var(--fancy-loader-top-color, rgba(0, 0, 0, 0.5));
      border-bottom-color: var(
        --fancy-loader-bottom-color,
        rgba(0, 0, 255, 0.5)
      );
    }

    /*loader 2  */
    .loader2,
    .loader2 div {
      border-radius: 50%;
      padding: 8px;
      border: 2px solid transparent;
      -webkit-animation: rotate linear 3.5s infinite;
      animation: rotate linear 3.5s infinite;
      border-top-color: rgba(0, 0, 255, 0.5);
      border-left-color: rgba(0, 0, 0, 0.5);
      border-right-color: rgba(0, 0, 0, 0.5);
    }

    /*loader 3  */
    .loader3,
    .loader3 div {
      border-radius: 50%;
      padding: 8px;
      border: 2px solid transparent;
      -webkit-animation: rotate linear 3.5s infinite;
      animation: rotate linear 3.5s infinite;
      border-top-color: rgba(0, 0, 0, 0.5);
      border-left-color: rgba(0, 0, 255, 0.5);
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.38, 0.21, 0.88);
      animation-timing-function: cubic-bezier(0.55, 0.38, 0.21, 0.88);
      -webkit-animation-duration: 3s;
      animation-duration: 3s;
    }

    /* loader 4 */
    .loader4,
    .loader4 div {
      border-radius: 50%;
      padding: 8px;
      border: 2px solid transparent;
      -webkit-animation: rotate linear 3.5s infinite;
      animation: rotate linear 3.5s infinite;
      border-radius: 50%;
      padding: 4px;
      -webkit-animation: rotate2 4s infinite linear;
      animation: rotate2 4s infinite linear;
    }

    div:hover {
      -webkit-animation-play-state: paused;
      animation-play-state: paused;
    }

    .loader,
    .loader * {
      will-change: transform;
    }
  </style>
`;

export const fancyLoader = () => html`
  ${style}

  <div class="loader loader1">
    <div>
      <div>
        <div>
          <div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
