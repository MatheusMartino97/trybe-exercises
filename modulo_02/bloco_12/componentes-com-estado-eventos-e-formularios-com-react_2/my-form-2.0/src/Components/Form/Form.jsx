import React, { Component } from 'react';

import PersonalDataFieldset from './PersonalData/PersonalDataFieldset';
import LastJobFieldset from './LastJob/LastJobFieldset';
import Button from './Button';

class Form extends Component {
  constructor() {
    super();

    this.sendPersonalInfoToFormState = this.sendPersonalInfoToFormState.bind(
      this
    );
    this.sendLastJogInfoToFormState = this.sendLastJogInfoToFormState.bind(
      this
    );
      this.handleResetButton = this.handleResetButton.bind(this)

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
  }

  handleSubmitButton(event) {
    event.preventDefault();

    const output = document.querySelector('.output');

    output.style.visibility = 'visible';
  }

  handleResetButton() {
    const ul = document.querySelector('ul')

    ul.innerHTML = ''

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
  render() {
    return (
      <div>
        <form action=''>
          <h1 id='title'>Formulário</h1>
          <div className='flex-container'>
            <div className='fieldsets'>
              <PersonalDataFieldset
                onChange={this.sendPersonalInfoToFormState}
              />

              <LastJobFieldset onChange={this.sendLastJogInfoToFormState} />
            </div>
            <div className='output'>
              <ul>
                {Object.entries(this.state).map((state, index) => {
                  if (state[1] === '') {
                    return;
                  } else {
                    return <li key={ index }>{`${state[0]}: ${state[1]}`}</li>;
                  }
                })}
              </ul>
            </div>
          </div>
          <div className='buttons'>
            <Button
              type='submit'
              text='Enviar'
              onClick={this.handleSubmitButton}
            />
            <Button
              type='reset'
              text='Limpar informações'
              onClick={this.handleResetButton}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
