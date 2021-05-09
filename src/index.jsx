import { h, render } from 'preact';
import 'preact/devtools';
import './styles/index.css';
import 'aframe';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
