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

    this.preventSpecialCharacteres = this.preventSpecialCharacteres.bind(this);

    this.state = {
      adress: '',
    };
  }

  preventSpecialCharacteres(event) {
    const valueWithoutSpecials = event.target.value
      .split('')
      .map((key) => (key.match(/[^\w\s]/gi) ? '' : key))
      .join('');

    event.target.value = valueWithoutSpecials;
  }

  verifyIfBeginsWithNumbers({ target }) {
    const { value } = target

    if (value && value[0].match(/[0-9]/)) {
      target.value = ''
    }
  }

  render() {
    return (
      <fieldset className='personal-data-fieldset'>
        <legend>Dados Pessoais</legend>
        <NameInput />
        <EmailInput />
        <CPFInput />
        <AdressInput onChange={this.preventSpecialCharacteres} />
        <CityInput onBlur={this.verifyIfBeginsWithNumbers} />
        <StateInput />
        <TypeInput />
      </fieldset>
    );
  }
}

export default PersonalDataFieldset;
