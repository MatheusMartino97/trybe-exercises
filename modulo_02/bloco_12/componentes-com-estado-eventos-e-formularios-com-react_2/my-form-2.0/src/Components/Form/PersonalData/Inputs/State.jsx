import React, { Component } from 'react';
import brazilStates from '../../../../data';

class StateInput extends Component {
  render() {
    return (
      <div className='layout-control'>
        <label htmlFor='state-input'>Estado: </label>
        <select name='state' id='' required>
          {brazilStates.map(({ short, name }) => {
            const selected = short === 'SP' ? 'selected' : '';

            return (
              <option value={short} key={short} selected={selected}>
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
