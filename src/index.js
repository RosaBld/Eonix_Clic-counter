import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// makes redux store available in the entire app - manage app's state
import configureStore from './configureStore';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

const initialState = {};
const history = createBrowserHistory();
const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);