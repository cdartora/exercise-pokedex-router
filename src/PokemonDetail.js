import React, { Component } from 'react';
import data from './data';

class PokemonDetail extends Component {
  render() { 
    const { pokemonName } = this.props.match.params;
    const pokemon = data.find((pokemon) => pokemon.name === pokemonName)
    console.log(pokemon);
    return (
      <div>
        <h1>{ pokemon.name }</h1>
        <p>{ pokemon.type }</p>
        <p>
          Average weight: {`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}
        </p>
        <p>More info:</p>
        <p>{ pokemon.summary }</p>
        <h1>Habitat</h1>
        {
          pokemon.foundAt.map((place) => (
            <div>
              <p>{ place.location }</p>
              <img src={ place.map } alt={ place.location } />
            </div>
          ))
        }
      </div>
    );
  }
}
 
export default PokemonDetail;