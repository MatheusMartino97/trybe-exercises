import React, { Component } from 'react';

class AdressInput extends Component {
  render() {
    return (
      <div className='layout-control'>
        <label htmlFor='adress-input'>Endereço: </label>
        <br />
        <textarea
          name='adress-textarea'
          id=''
          cols='30'
          rows='10'
          maxLength='200'
          required
        ></textarea>
      </div>
    );
  }
}

export default AdressInput;
