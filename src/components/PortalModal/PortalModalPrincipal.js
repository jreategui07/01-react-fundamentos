import React from 'react'
import PortalModal from './PortalModal'

class PortalModalPrincipal extends React.Component {

  state = {
    visible: false,
    num: 0
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        num: this.state.num + 1
      })
    }, 1000);
  }

  mostrar = () => {
    this.setState({
      visible: true
    })
  }

  cerrar = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.mostrar}>Mostrar</button>
        <PortalModal visible={this.state.visible}>
          <button onClick={this.cerrar}>Mostrar</button>
          <h1>
            Hola soy un portal React! =P {this.state.num}
          </h1>
        </PortalModal>
      </div>
    )
  }

}

export default PortalModalPrincipal
