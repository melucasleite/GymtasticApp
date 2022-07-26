import React from 'react';
import {Provider} from 'react-redux';
import {store} from './state/reducer';
import App from './components/App';

const ConnectedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ConnectedApp;
