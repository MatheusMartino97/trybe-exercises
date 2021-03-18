import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class About extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Sobre</h1>
          <Link to="/">Home</Link>
        </header>
      </div>
    );
  }
}

export default About;
