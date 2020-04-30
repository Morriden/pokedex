import React, { Component } from 'react'

export default class PokemonList extends Component {
    render() {
        return (
            <div className="pokemon-list">
                <img 
                    alt={this.props.pokemon.url_image}
                    src={this.props.pokemon.url_image} />
                <h3>{this.props.pokemon.pokemon}</h3>
            </div>
        )
    }
}