import React from 'react'

const Computacion = () => (
  <React.Fragment>
    <li>Monitor</li>
    <li>Mouse</li>
    <li>Teclado</li>
  </React.Fragment>
)

const Ropa = () => (
  <React.Fragment>
    <li>Playera</li>
    <li>Jeans</li>
    <li>Shorts</li>
  </React.Fragment>
)

class Fragments extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <Computacion />
          <Ropa />
        </ul>
      </div>
    )
  }

}

export default Fragments
