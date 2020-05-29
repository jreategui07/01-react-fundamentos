import React from 'react'
import { Component } from "react";

class Saludo extends Component {

  render() {
    return (
      <div>
        <div>
          { this.props.name && <strong>{this.props.name}</strong> }
        </div>
        {
          this.props.saluda 
          ? (
              <h2>Hola Ninja!</h2>
            ) 
          : (
              <h2>Lo siento, no tienes saludo</h2>
            )
        }
      </div>
    )
  }

}

export default Saludo
