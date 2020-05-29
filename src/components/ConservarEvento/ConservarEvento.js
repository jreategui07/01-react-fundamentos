import React from 'react'
import { Component } from "react";

export class ConservarEvento extends Component {

  state = {
    color: 'blue'
  }

  handlerChange = (event) => {

    const color = event.target.value;

    this.setState({
      color
    })

  }

  render() {
    return (
      <div>
        <input 
          type="text"
          onChange={this.handlerChange}
        />
        <h1 style={{color: this.state.color}}>
          {this.state.color}
        </h1>
      </div>
    )
  }

}

export default ConservarEvento
