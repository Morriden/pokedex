import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PokemonList extends Component {
    render() {
        const pokemon = this.props.pokemon;

        return <li className="pokemon-list-item">
                    <Link to={`/pokemon/${this.props.pokemon._id}`}>
                        <div>
                            <img 
                            alt={pokemon.url_image}
                            src={pokemon.url_image} />
                        </div>
                    <h3>{pokemon.pokemon}</h3>
                    
                    <span>Type 1: {pokemon.type_1} Type 2: {pokemon.type_2}</span>
                    <span> Attack: {pokemon.attack} Defense: {pokemon.defense}</span>
                    </Link>
                </li>;
    }
          
}


         