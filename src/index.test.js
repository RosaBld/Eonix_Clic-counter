// index.test.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from './configureStore';
import App from './App';
import { render } from '@testing-library/react';

// Mock ReactDOM.render
jest.mock('react-dom', () => ({ render: jest.fn() }));

// Mock configureStore
jest.mock('./configureStore', () => jest.fn(() => ({
  getState: jest.fn(),
  subscribe: jest.fn(),
  dispatch: jest.fn(),
})));

describe('index.js', () => {
  it('renders without crashing', () => {
    const initialState = {};
    const history = createBrowserHistory();
    const store = configureStore(initialState, history);

    // Render the component
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Assert that ReactDOM.render was called
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});