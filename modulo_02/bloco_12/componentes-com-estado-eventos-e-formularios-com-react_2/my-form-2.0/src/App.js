import React, { Component } from 'react';
import './App.css';

import Form from './Components/Form/Form';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Form onChange={this.updateFormState}/>
      </div>
    );
  }
}

export default App;
