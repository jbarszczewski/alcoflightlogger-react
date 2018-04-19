import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './stores/configureStore';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/app/App';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );
  registerServiceWorker();
