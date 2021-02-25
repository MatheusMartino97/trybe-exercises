import React, { Component } from 'react';

import AdressInput from './Inputs/Adress';
import CityInput from './Inputs/City';
import CPFInput from './Inputs/CPF';
import EmailInput from './Inputs/Email';
import NameInput from './Inputs/Name';
import StateInput from './Inputs/State';
import TypeInput from './Inputs/Type';
class PersonalDataFieldset extends Component {
  preventSpecialCharacteres({ target }) {
    const valueWithoutSpecials = target.value
      .split('')
      .map((key) => (key.match(/[^\w\s]/gi) ? '' : key))
      .join('');

    target.value = valueWithoutSpecials;
  }

  verifyIfBeginsWithNumbers({ target }) {
    const { value } = target;

    if (value && value[0].match(/[0-9]/)) {
      target.value = '';
    }
  }

  updateFieldProperties({ target }) {
    const { name, value } = target
    const personalDataFieldset = document.querySelector('.personal-data-fieldset')

    personalDataFieldset[name] = value
  }

  render() {
    return (
      <fieldset
        className='personal-data-fieldset'
        onChange={this.props.onChange}
      >
        <legend>Dados Pessoais</legend>
        <NameInput onChange={this.updateFieldProperties} />
        <EmailInput onChange={this.updateFieldProperties} />
        <CPFInput onChange={this.updateFieldProperties} />
        <AdressInput
          onChange={(event) => {
            this.preventSpecialCharacteres(event);
            this.updateFieldProperties(event);
          }}
        />
        <CityInput
          onBlur={(event) => {
            this.verifyIfBeginsWithNumbers(event);
            this.updateFieldProperties(event);
          }}
          onChange={this.updateFieldProperties}
        />
        <StateInput onChange={this.updateFieldProperties} />
        <TypeInput onChange={this.updateFieldProperties} />
      </fieldset>
    );
  }
}

export default PersonalDataFieldset;
