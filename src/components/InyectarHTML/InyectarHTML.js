import React from 'react'

class InyectarHTML extends React.Component {

  state = {
    marcado: `
      <h1>Inyectando HTML con React!</h1>
      <br />
      <hr />
      <a href="#">Algun link...</a>
    `
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: this.state.marcado}}></div>
      </div>
    )
  }

}

export default InyectarHTML
