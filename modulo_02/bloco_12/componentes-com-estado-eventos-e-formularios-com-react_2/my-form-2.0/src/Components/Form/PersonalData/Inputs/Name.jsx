import React, { Component } from 'react'

class NameInput extends Component {
  render() {
    return(
      <div className='layout-control'>
        <label htmlFor="name-input">Nome: </label>
        <input id='name-input' type='text' maxLength='40' required />
      </div>
    )
  }
}

export default NameInput