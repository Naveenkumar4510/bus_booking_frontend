import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
=======

>>>>>>> dbe7ae9d90362eb2079ab32e9d2cd1c1ff94a972


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
=======
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> dbe7ae9d90362eb2079ab32e9d2cd1c1ff94a972
);

