import React, { Component } from 'react';

import AdressInput from './Inputs/Adress';
import CityInput from './Inputs/City';
import CPFInput from './Inputs/CPF';
import EmailInput from './Inputs/Email';
import NameInput from './Inputs/Name';
import StateInput from './Inputs/State';
import TypeInput from './Inputs/Type';
class PersonalDataFieldset extends Component {
  render() {
    return (
      <fieldset className='personal-data-fieldset'>
        <legend>Dados Pessoais</legend>
        <NameInput />
        <EmailInput />
        <CPFInput />
        <AdressInput />
        <CityInput />
        <StateInput />
        <TypeInput />
      </fieldset>
    );
  }
}

export default PersonalDataFieldset;
