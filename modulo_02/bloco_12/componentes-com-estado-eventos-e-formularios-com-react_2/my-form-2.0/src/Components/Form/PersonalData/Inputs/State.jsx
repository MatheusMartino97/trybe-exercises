import React, { Component } from 'react';
import brazilStates from '../../../../data';

class StateInput extends Component {
  render() {
    return (
      <div className='layout-control'>
        <label htmlFor='state-input'>Estado: </label>
        <select name='state' id='' required onChange={this.props.onChange} >
          <option value=""></option>
          {brazilStates.map(({ short, name }) => {

            return (
              <option
                name='state'
                value={short}
                key={short}
              >
                {name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default StateInput;
