import React, { Component } from 'react';

class CPFInput extends Component {
  render() {
    return (
      <div className='layout-control'>
        <label htmlFor='CPF-input'>CPF: </label>
        <input
          name='cpf'
          type='text'
          maxLength='11'
          required
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default CPFInput;
