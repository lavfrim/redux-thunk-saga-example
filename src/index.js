import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './redux/reducers/rootReducer';
import { forbiddenWordsMeddleware } from './redux/middleware/forbidden-words';
import { sagaWatcher } from './redux/middleware/sagas';

import App from './App';


const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, forbiddenWordsMeddleware, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(sagaWatcher);

// >> with composeWithDevTools as
// >> compose(
// >>    applyMiddleware(...middleware),
// >>    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// >> )
// 
// const store = createStore(
//   rootReducer,
//   composeWithDevTools()
// );

render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
