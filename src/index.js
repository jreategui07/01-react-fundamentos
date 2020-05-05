import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Jonathan Reátegui';

const user = {
  name: 'Jonthan Reátegui',
  age: '30',
  country: 'Venezuela'
};

function getInfo(userData) {
  return `Hola React! ${userData.name} edad: ${userData.age}`
}

const App = <h1>{ getInfo(user) }</h1>;
ReactDOM.render(App, document.getElementById('root'));


