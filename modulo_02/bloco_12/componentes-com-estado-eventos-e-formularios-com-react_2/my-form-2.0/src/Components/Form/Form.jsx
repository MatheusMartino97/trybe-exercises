import React, { Component } from 'react';

import PersonalDataFieldset from './PersonalData/PersonalDataFieldset';

class Form extends Component {
  render() {
    return (
      <div>
        <form action=''>
          <h1>Formulário</h1>

          <PersonalDataFieldset />
        </form>
      </div>
    );
  }
}

export default Form;
