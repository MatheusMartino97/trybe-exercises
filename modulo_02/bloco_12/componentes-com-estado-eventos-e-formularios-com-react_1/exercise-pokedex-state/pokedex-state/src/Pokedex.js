import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import Button from './Components/Button';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonIndex: 0,
    };
  }

  nextPokemon() {
    if (this.state.pokemonIndex < pokemons.length - 1) {
      this.setState((previousState, _props) => {
        return {
          pokemonIndex: previousState.pokemonIndex + 1,
        };
      });
    } else {
      this.setState((_previousState, _props) => {
        return {
          pokemonIndex: 0,
        };
      });
    }
    console.log(this.state.pokemonIndex);
  }

  render() {
    return (
      <main>
        <div className='pokedex'>

          <Pokemon pokemon={pokemons[this.state.pokemonIndex]} />
        </div>
        <div>
        <Button onClick={() => this.nextPokemon()} type='Next' />
        <Button onClick={() => this.nextPokemon()} type='Next' />
        </div>
      </main>
    );
  }
}

export default Pokedex;
