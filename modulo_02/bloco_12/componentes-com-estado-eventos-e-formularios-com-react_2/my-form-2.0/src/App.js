import React, { Component } from 'react';
import './App.css';

import Form from './Components/Form/Form';

class App extends Component {
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
    this.setState({[target.name]: target.value})
  }

  render() {
    return (
      <div className='App'>
        <Form onChange={this.updateFormState}/>
      </div>
    );
  }
}

export default App;
