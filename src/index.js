import "./style";
import "aframe";
import "aframe-event-set-component";
import "aframe-particle-system-component";
import { h } from "preact";
import { Provider } from "react-redux";
import { store } from "./store";
import Main from "./components/main";

const App = () => (
  <div id="app">
    <Provider store={store}>
      <Main />
    </Provider>
  </div>
);

export default App;
