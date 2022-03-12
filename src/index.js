import React from 'react';
import ReactDOM from 'react-dom';
// All CSS
import './index.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// All JS
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
// All Components
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
