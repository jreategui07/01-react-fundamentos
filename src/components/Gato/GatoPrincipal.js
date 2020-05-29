import React from 'react'
import { Component } from "react";
import Gato from './Gato'

class GatoPrincipal extends Component {

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
      <Gato
        name="Garfiled"
        age="2 años"
        {...otrosDatos}
        {...this.state}
      />
    )
  }

}

export default GatoPrincipal
