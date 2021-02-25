import React, { Component } from 'react';

class EmailInput extends Component {
  render() {
    return (
      <div className='layout-control'>
        <label htmlFor='email-input'>Email: </label>
        <input
          name='email'
          id='email-input'
          type='email'
          maxLength='50'
          required
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default EmailInput;
