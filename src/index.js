import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Model from './cars/model';
import Garage from './cars/garage';
import Football from './football/football';
import MyForm from './forms/myForm';
import Routing from '../src/routing';

var mycar = new Model("Ford", "Mustang");
mycar.show();

const render = () => {

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Routing />
    <Garage />
    <MyForm />
    <Football />
  </React.StrictMode>,
  document.getElementById('root')
);

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

setInterval(render, 1000);