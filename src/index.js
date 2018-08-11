import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import rosmaro from 'rosmaro';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import graph from './graph.json'
import makeBindings from './bindings/index';
import registerServiceWorker from './registerServiceWorker';
import {composeWithDevTools} from 'redux-devtools-extension';
import {makeReducer} from 'rosmaro-redux';
import rosmaroComponent from 'rosmaro-react';

const model = rosmaro({
  graph, 
  bindings: makeBindings()
});

const rootReducer = makeReducer(model);

const store = createStore(
  rootReducer,
  composeWithDevTools({})()
);

const App = rosmaroComponent({
  model,
  selector: state => state
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();