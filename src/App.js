import React, { Component } from 'react'
// import TarjetaFruta from './components/TarjetaFruta';
// import Contador from './components/Contador';
// import Gato from './components/Gato'
// import EventoMouse from './components/EventoMouse'
// import EventoInput from './components/EventoInput'
// import ConservarEvento from './components/ConservarEvento'
import EventoPersonalizado from './components/EventoPersonalizado'
import './components/EventoPersonalizado/global.css'

class App extends Component {

  /* state = {
    fuerza: 100,
    vidasRestantes: 7
  } */

  state = {
    mensaje: ''
  }

  manejador = (event) => {
    this.setState({
      mensaje: event
    })
  }

  render() {

    /* const otrosDatos = {
      raza: 'Tropical',
      peleasNocturnas: 300
    }; */

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
          {/* <EventoInput /> */}

          {/* COMPONENTE CONSERVAR-EVENTO */}
          {/* <ConservarEvento /> */}

          {/* COMPONENTE EVENTO-PERSONALIZADO */}
          <div className="box red">
            <EventoPersonalizado onSaludar={this.manejador} />
            <h1>
              Mensaje: {this.state.mensaje}
            </h1>
          </div>


        </div>
    )
  }
}

export default App;