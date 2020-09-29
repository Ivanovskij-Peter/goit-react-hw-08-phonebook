import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'modern-normalize/modern-normalize.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './components/redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <>
    <Provider store={store.store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={store.persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById('root'),
);
