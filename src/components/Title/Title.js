import React from 'react';

class Title extends React.Component {

  render() {

    console.log(this.props.children);

    const styles = {
      padding: '0.3em',
      color: '#FFF',
      background: this.props.uiColor,
      borderRadius: '0.3em',
      textAlign: 'center',
      fontSize: '50px'
    }

    return (
      <h1 style={styles}>
        {this.props.children}
      </h1>
    )
  }

}

export default Title
