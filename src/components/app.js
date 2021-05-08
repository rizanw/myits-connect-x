import { h } from "preact";
import { Provider } from "react-redux";
import { store } from "../store";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import LoginDialog from "./loginDialog";

const App = () => (
  <div id="app">
    <Provider store={store}>
      <Home />
      <LoginDialog />
    </Provider>
  </div>
);

export default App;
