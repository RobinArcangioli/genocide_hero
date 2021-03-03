import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './containers/Game';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
    <Provider store={store}>
      <Game />
    </Provider>,
    document.getElementById('root'),
);
