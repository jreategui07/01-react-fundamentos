import React from 'react';
import ReactDOM from 'react-dom';

class TarjetaFruta extends React.Component {
  constructor() {
    super();

    /* this.agregar = this.agregar.bind(this);
    this.quitar = this.quitar.bind(this); */

    /* hacer bind de forma dinámica */
    const METHODS = [
      'agregar',
      'quitar',
      'limpiar'
    ];
    METHODS.forEach((method) => {
      this[method] = this[method].bind(this);
    });
    /* fin de hacer bind de forma dinámica */

    this.state = {
      cantidad: 0
    };
  }
  agregar() {
    this.setState({
      cantidad: this.state.cantidad + 1
    });
  }
  quitar() {
    this.setState({
      cantidad: this.state.cantidad - 1
    });
  }
  limpiar() {
    this.setState({
      cantidad: 0
    });
  }
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <div>Cantidad: {this.state.cantidad}</div>
        <button onClick={this.agregar}>+</button>
        <button onClick={this.quitar}>-</button>
        <button onClick={this.limpiar}>Limpiar</button>
        <hr/>
        <p>{this.props.price}</p>
      </div>
    )  
  }
}

const App = () => (
  <div>
    <TarjetaFruta name={'Manzana'} price={5} />
    <TarjetaFruta name={'Naranja'} price={4} />
    <TarjetaFruta name={'Pera'} price={3} />
  </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));
