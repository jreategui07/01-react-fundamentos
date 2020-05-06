import React from 'react';
import TarjetaFruta from './components/TarjetaFruta'

const App = () => (
  <div>
    <TarjetaFruta name={'Manzana'} price={5} />
    <TarjetaFruta name={'Naranja'} price={4} />
    <TarjetaFruta name={'Pera'} price={3} />
  </div>
);

export default App;