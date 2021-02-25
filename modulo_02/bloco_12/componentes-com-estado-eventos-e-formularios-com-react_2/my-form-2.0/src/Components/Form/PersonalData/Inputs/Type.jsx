import React, { Component } from 'react';

class TypeInput extends Component {
  render() {
    return (
      <div className='layout-control'>
        <label htmlFor='type-input'>Moradia: </label>
        <div onChange={this.props.onChange}>
          <input type='radio' name='homeType' id='house' value='house' required />
          <label htmlFor='house'>Casa</label>

          <input type='radio' name='homeType' id='apartment' value='apartment' />
          <label htmlFor='apartment'>Apartamento</label>
        </div>
      </div>
    );
  }
}

export default TypeInput;
