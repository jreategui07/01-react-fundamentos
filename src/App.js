import React, { Component } from 'react'
// import TarjetaFruta from './components/TarjetaFruta';
// import Contador from './components/Contador';
// import Gato from './components/Gato'
// import EventoMouse from './components/EventoMouse'
import EventoInput from './components/EventoInput'

class App extends Component {

  state = {
    fuerza: 100,
    vidasRestantes: 7
  }

  render() {

    const otrosDatos = {
      raza: 'Tropical',
      peleasNocturnas: 300
    };

    return (
        <div>
          {/* COMPONENTE TARJETA-FRUTA */}
          {/* <TarjetaFruta name={'Manzana'} price={5} />
          <TarjetaFruta name={'Naranja'} price={4} />
          <TarjetaFruta name={'Pera'} price={3} /> */}
          
          {/* COMPONENTE CONTADOR */}
          {/* <Contador/> */}

          {/* COMPONENTE GATO */}
          {/*  <Gato
            name="Garfiled"
            age="2 años"
            {...otrosDatos}
            {...this.state}
          /> */}

          {/* COMPONENTE EVENTO-MOUSE */}
          {/* <EventoMouse /> */}
          
          {/* COMPONENTE INPUT */}
          <EventoInput />


        </div>
    )
  }
}

export default App;