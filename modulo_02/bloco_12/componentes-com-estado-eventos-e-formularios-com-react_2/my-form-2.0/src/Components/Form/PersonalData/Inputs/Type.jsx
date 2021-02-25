import React, { Component } from 'react'

class TypeInput extends Component {
  render() {
    return(
      <div className='layout-control'>
      <label htmlFor="type-input">Moradia: </label>
      <div>
        <input type="radio" name="type" id="house" checked required />
        <label htmlFor="house" >Casa</label>
        
        <input type="radio" name="type" id="apartment"/>
      <label htmlFor="apartment" >Apartamento</label>
      </div>
    </div>
    )
  }
}

export default TypeInput