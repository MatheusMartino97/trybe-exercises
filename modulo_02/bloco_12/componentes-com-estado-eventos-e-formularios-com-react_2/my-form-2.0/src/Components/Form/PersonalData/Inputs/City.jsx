import React, { Component } from 'react';

class CityInput extends Component {
  render() {
    return (
      <div className='layout-control'>
        <label htmlFor='city-input'>Cidade: </label>
        <input
          name='city'
          type='text'
          maxLength='28'
          required
          onBlur={this.props.onBlur}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default CityInput;
