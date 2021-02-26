import React from 'react';
import ReactDOM from 'react-dom';
import App from './weather1/App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducer from './weather1/reducer';
const store = createStore(Reducer)
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

