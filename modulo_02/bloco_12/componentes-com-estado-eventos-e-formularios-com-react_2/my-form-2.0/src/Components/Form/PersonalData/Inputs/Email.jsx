import React, { Component } from 'react'

class EmailInput extends Component {
  render() {
    return(
      <div className='layout-control'>
      <label htmlFor="email-input">Email: </label>
      <input id='email-input' type='email' maxLength='50' required />
    </div>
    )
  }
}

export default EmailInput
