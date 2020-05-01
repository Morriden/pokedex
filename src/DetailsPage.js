import React, { Component } from 'react'
import request from 'superagent'
import PokemonList from './PokemonList.js'

export default class DetailsPage extends Component {
    state = {
        data: null,
        loading: true
    }

    async componentDidMount() {
        // wait for the request to finish
        console.log(this.props.match.params.pokemon)
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.props.match.params.pokemon}`)    

        this.setState({ data: data.body, loading: false })
    }

    render() {
        return (
            <div> 
                Welcome to the detail page?
                {
                this.state.loading ?
                    <h1>Loading</h1>
                    :
                    <PokemonList pokemon={this.state.data} />
                }
               
                
            
            </div>
        )
    }
}
