import { Component } from 'react';

class Button extends Component {
  render() {
    return(
      <button name={this.props.name} onClick={this.props.onclick}>Próxima foto</button>
    )
  }
}

export default Button