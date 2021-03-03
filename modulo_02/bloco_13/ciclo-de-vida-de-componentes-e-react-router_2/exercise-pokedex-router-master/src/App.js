import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <h1> Pokedex </h1>
          <div className='fixed-links'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/favorites'>Favoritos</Link>
          </div>
          <Switch>
            <Route to='/' render={(props) => <Pokedex {...props} pokemons={pokemons} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
