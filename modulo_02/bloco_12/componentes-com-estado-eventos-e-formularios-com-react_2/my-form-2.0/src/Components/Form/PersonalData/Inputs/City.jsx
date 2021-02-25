import React, { Component } from 'react';

class CityInput extends Component {
  render() {
    return (
      <div className='layout-control'>
        <label htmlFor='city-input'>Cidade: </label>
        <input type='text' maxLength='28' required onBlur={this.props.onBlur} />
      </div>
    );
  }
}

export default CityInput;
