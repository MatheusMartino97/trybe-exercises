import React, { Component } from 'react'

class Button extends Component {
  render() {
    return(
      
        <button onClick={this.props.onClick} type={this.props.type}>
          {this.props.text}
        </button>
      
      
    )
  }
}

export default Button
