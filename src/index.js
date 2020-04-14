import React from 'react';
import storeFactory from './store';
import App from './components/App';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

const store = storeFactory(false, {});

render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);