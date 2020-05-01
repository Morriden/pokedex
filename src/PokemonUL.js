import React, { Component } from 'react'
import PokemonList from './PokemonList.js'

export default class PokemonUL extends Component {
    render() {
        return (
            <section>
              <ul className="list-container">
               {this.props.pokemon.map(pokemon => <PokemonList pokemon={pokemon}/>)}
              </ul>
            
          </section> 
        )
    }
}
