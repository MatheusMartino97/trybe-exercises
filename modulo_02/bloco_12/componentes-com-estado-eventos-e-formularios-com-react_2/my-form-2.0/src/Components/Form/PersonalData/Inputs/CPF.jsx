import React, { Component } from 'react';

class CPFInput extends Component {
  render() {
    return (
      <div className='layout-control'>
        <label htmlFor='CPF-input'>CPF: </label>
        <input type='text' maxLength='11' required />
      </div>
    );
  }
}

export default CPFInput;
