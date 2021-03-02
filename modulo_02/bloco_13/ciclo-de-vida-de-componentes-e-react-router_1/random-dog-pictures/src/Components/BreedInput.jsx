import { Component } from 'react';

class BreedInput extends Component {
  render() {
    return(
      <label htmlFor="breed-input">
        <input name='breed' id='breed-input' onKeyDown={this.props.onchange} onChange={this.props.onchange} value={this.props.value} type="text" placeholder='Digite uma raça aqui' />
      </label>
    )
  }
}

export default BreedInput