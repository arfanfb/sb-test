import React from 'react';
import ReactDOM from 'react-dom';
import configureStore, { history } from './stores/configureStore';  
import { BrowserRouter } from "react-router-dom";
import App from './App';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <App history={history} store={store} />
  </BrowserRouter>,
  document.getElementById('root')
);
