import React from 'react'
import { Component } from 'react'

import EventoPersonalizado from './EventoPersonalizado'
import './global.css'

class EventoPersonalizadoPrincipal extends Component {

  state = {
    mensaje: ''
  }

  manejador = (event) => {
    this.setState({
      mensaje: event
    })
  }

  render() {
    return (
      <div className="box red">
        <EventoPersonalizado onSaludar={this.manejador} />
        <h1>
          Mensaje: {this.state.mensaje}
        </h1>
      </div>
    )
  }

}

export default EventoPersonalizadoPrincipal
