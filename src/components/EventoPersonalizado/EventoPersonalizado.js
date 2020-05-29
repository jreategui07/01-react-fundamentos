import React from 'react'
import { Component } from "react";
import './global.css'

class EventoPersonalizado extends Component {

  manejadorClick = () => {
    this.props.onSaludar('Ninja en React!!!')
  }

  render() {
    return (
      <div className="box blue">
        <h1>Hola!</h1>
        <button type="text" onClick={this.manejadorClick}>Click!</button>
      </div>
    )
  }

}

export default EventoPersonalizado
