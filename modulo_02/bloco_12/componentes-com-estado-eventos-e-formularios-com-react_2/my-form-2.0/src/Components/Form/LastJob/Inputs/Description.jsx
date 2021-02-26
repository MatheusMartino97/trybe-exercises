import React, { Component } from 'react';

class DescriptionInput extends Component {
  render() {
    return (
      <div className='layout-control'>
        <label htmlFor='description-input'>Descrição do cargo: </label>
        <br />
        <textarea
          name='description'
          id=''
          cols='30'
          rows='10'
          maxLength='500'
          required
          onChange={this.props.onChange}
        ></textarea>
      </div>
    );
  }
}

export default DescriptionInput;
