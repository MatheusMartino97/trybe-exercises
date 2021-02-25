import React, { Component } from 'react';

import PersonalDataFieldset from './PersonalData/PersonalDataFieldset';
import LastJobFieldset from './LastJob/LastJobFieldset';

class Form extends Component {
  constructor() {
    super();

    this.sendPersonalInfoToFormState = this.sendPersonalInfoToFormState.bind(this);
    this.sendLastJogInfoToFormState = this.sendLastJogInfoToFormState.bind(this)

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

  sendPersonalInfoToFormState({ target }) {
    const personalDataFieldset = document.querySelector(
      '.personal-data-fieldset'
    );

    this.setState({ [target.name]: personalDataFieldset[target.name] });
  }

  sendLastJogInfoToFormState({ target }) {
    const lastJobFieldset = document.querySelector('.last-job-fieldset');

    this.setState({ [target.name]: lastJobFieldset[target.name] });

    console.log('iuuuu')
  }
  render() {
    return (
      <div>
        <form action=''>
          <h1>Formulário</h1>

          <PersonalDataFieldset onChange={this.sendPersonalInfoToFormState} />
          <LastJobFieldset onChange={this.sendLastJogInfoToFormState}/>
        </form>
      </div>
    );
  }
}

export default Form;
