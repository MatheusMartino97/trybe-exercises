import React, { Component } from 'react';

import AdressInput from './Inputs/Adress';
import CityInput from './Inputs/City';
import CPFInput from './Inputs/CPF';
import EmailInput from './Inputs/Email';
import NameInput from './Inputs/Name';
import StateInput from './Inputs/State';
import TypeInput from './Inputs/Type';
class PersonalDataFieldset extends Component {
  constructor() {
    super();

    this.updateState = this.updateState.bind(this);
  }

  preventSpecialCharacteres(event) {
    const valueWithoutSpecials = event.target.value
      .split('')
      .map((key) => (key.match(/[^\w\s]/gi) ? '' : key))
      .join('');

    event.target.value = valueWithoutSpecials;
  }

  verifyIfBeginsWithNumbers({ target }) {
    const { value } = target;

    if (value && value[0].match(/[0-9]/)) {
      target.value = '';
    }
  }

  updateState({ target }) {
    const { name, value } = target
    const personalDataFieldset = document.querySelector('.personal-data-fieldset')

    personalDataFieldset[name] = value
  }

  render() {
    return (
      <fieldset
        className='personal-data-fieldset'
      >
        <legend>Dados Pessoais</legend>
        <NameInput onChange={this.updateState} />
        <EmailInput onChange={this.updateState} />
        <CPFInput onChange={this.updateState} />
        <AdressInput
          onChange={(event) => {
            this.preventSpecialCharacteres(event);
            this.updateState(event);
          }}
        />
        <CityInput
          onBlur={(event) => {
            this.verifyIfBeginsWithNumbers(event);
            this.updateState(event);
          }}
          onChange={this.updateState}
        />
        <StateInput onChange={this.updateState} />
        <TypeInput onChange={this.updateState} />
      </fieldset>
    );
  }
}

export default PersonalDataFieldset;
