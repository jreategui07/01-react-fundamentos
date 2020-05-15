import React, { Component } from 'react'
/* import TarjetaFruta from './components/TarjetaFruta';
import Contador from './components/Contador';
import GatoPrincipal from './components/Gato'
import EventoMouse from './components/EventoMouse'
import EventoInput from './components/EventoInput'
import ConservarEvento from './components/ConservarEvento'
import EventoPersonalizadoPrincipal from './components/EventoPersonalizado'
import Saludo from './components/Saludo' */
import Title from './components/Title';
 
class App extends Component {

  render() {

    return (
        <div>
          {/* <TarjetaFruta name={'Manzana'} price={5} />
          <TarjetaFruta name={'Naranja'} price={4} />
          <TarjetaFruta name={'Pera'} price={3} />
          <Contador/>
          <GatoPrincipal />
          <EventoMouse />
          <EventoInput />
          <ConservarEvento />
          <EventoPersonalizadoPrincipal />
          <Saludo saluda name="Jonathan" /> */}
          <Title uiColor="purple">
            Ninja <em>PRO</em>!
          </Title>
        </div>
    )
  }
}

export default App;