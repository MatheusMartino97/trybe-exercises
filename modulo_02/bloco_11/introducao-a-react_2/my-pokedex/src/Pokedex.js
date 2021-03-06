import React, { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends Component {
  render() {
    const listItems = pokemons.map((pokemon, index) => {
      return (
        <div key={index}>
          <Pokemon
            name={pokemon.name}
            type={pokemon.type}
            averageWeight={pokemon.averageWeight.value}
            measurementUnit={pokemon.averageWeight.measurementUnit}
            image={pokemon.image}
          />
        </div>
      );
    });
    return <div>{listItems}</div>;
  }
}

export default Pokedex;
