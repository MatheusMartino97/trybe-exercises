import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo.svg';

class Projects extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Projetos</h1>
        <Link to="/">Home</Link>
      </header>
    </div>
    );
  };
}

export default Projects;
