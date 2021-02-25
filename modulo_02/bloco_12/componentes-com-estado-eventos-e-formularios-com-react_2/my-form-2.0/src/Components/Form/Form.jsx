import React, { Component } from 'react';

import PersonalDataFieldset from './PersonalData/PersonalDataFieldset';
import LastJobFieldset from './LastJob/LastJobFieldset';

class Form extends Component {
  render() {
    return (
      <div>
        <form action='' onChange={this.props.onChange}>
          <h1>Formulário</h1>

          <PersonalDataFieldset onChange={this.updateFormState} />
          <LastJobFieldset />
        </form>
      </div>
    );
  }
}

export default Form;
