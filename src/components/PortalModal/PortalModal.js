import React from 'react'
import ReactDOM from 'react-dom'

class PortalModal extends React.Component {

  render() {

    if (!this.props.visible) {
      return null;
    }

    const styles = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      background: 'linear-gradient(to top right, #667eea, #764ba2)',
      opacity: '0.95',
      color: '#fff'
    }
    

    return ReactDOM.createPortal(
      <div style={styles}>
        {this.props.children}
      </div>,
      document.getElementById('modal-root')
    )
  }
}

export default PortalModal
