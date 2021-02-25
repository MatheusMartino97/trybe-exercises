import React, { Component } from 'react';

import PersonalDataFieldset from './PersonalData/PersonalDataFieldset';
import LastJobFieldset from './LastJob/LastJobFieldset';

class Form extends Component {
  constructor() {
    super();

    this.updateFormState = this.updateFormState.bind(this);

    this.state = {
      adress: '',
      city: '',
      cpf: '',
      description: '',
      email: '',
      name: '',
      post: '',
      resume: '',
      state: '',
      type: '',
    };
  }

  updateFormState({ target }) {
    const personalDataFieldset = document.querySelector(
      '.personal-data-fieldset'
    );

    this.setState({ [target.name]: personalDataFieldset[target.name]});
  }
  render() {
    return (
      <div>
        <form action=''>
          <h1>Formulário</h1>

          <PersonalDataFieldset onChange={this.updateFormState} />
          <LastJobFieldset />
        </form>
      </div>
    );
  }
}

export default Form;
