import { h, render } from "preact";
import "preact/devtools";
import "./styles/index.css";
import "aframe";
import "aframe-event-set-component";
import "aframe-look-at-component";
import "aframe-htmlembed-component";
import "./assets/js/aframe-environment";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
