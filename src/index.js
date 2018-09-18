/* eslint react/jsx-filename-extension: off */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import devToolsExtension from './utils/devToolsExtension';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    devToolsExtension(),
  ),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

registerServiceWorker();
