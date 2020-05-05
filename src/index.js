import React from 'react';
import ReactDOM from 'react-dom';

const TarjetaFruta = (props) => {
  console.log(props);
  return (
    <div>
      <h3>{props.name}</h3>
      <hr/>
      <p>{props.price}</p>
    </div>
  )
};


const App = () => (
  <div>
    <TarjetaFruta name={'Manzana'} price={2.1} />
    <TarjetaFruta name={'Naranja'} price={1.4} />
    <TarjetaFruta name={'Pera'} price={1.7} />
  </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));
