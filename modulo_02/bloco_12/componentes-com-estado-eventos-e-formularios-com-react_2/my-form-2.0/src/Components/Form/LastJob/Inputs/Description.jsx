import React, { Component } from 'react';

class DescriptionInput extends Component {
  render() {
    return (
      <div className='layout-control'>
        <label htmlFor='description-input'>Descrição do cargo: </label>
        <br />
        <textarea
          name='description-text-area'
          id=''
          cols='30'
          rows='10'
          maxLength='500'
          required
        ></textarea>
      </div>
    );
  }
}

export default DescriptionInput;
