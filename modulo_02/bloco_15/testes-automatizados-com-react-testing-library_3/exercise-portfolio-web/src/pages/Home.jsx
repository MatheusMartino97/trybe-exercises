import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
            <h1>Meu portfólio</h1>
            <Link data-testid="projects-link" to="/projects">Projetos</Link>
            <Link data-testid="contact-link" to="/contact">Contato</Link>
            <Link data-testid="about-link" to="/about">Sobre</Link>
          </header>
        </div>
      </div>
    );
  }
}

export default Home;
