import React, { Component } from 'react';

class CityInput extends Component {
  handleBlur() {
    console.log('iiiiiiiiiiiiiiirrrrra');
  }

  render() {
    return (
      <div className='layout-control'>
        <label htmlFor='city-input'>Cidade: </label>
        <input type='text' maxLength='28' required onBlur={this.handleBlur} />
      </div>
    );
  }
}

export default CityInput;
