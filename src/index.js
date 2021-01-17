import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import reportWebVitals from './reportWebVitals';
import  "./Components/assets/css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css' 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
