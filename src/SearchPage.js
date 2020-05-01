import React, { Component } from 'react'
import request from 'superagent'
import './App.css'
import PokemonUL from './PokemonUL.js'
import SearchSection from './SearchSection.js'

export default class SearchPage extends Component {


state = {
  search: '',
  dropdown: 'pokemon',
  data: [],
}

async componentDidMount() {
  const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`)
  this.setState({ data: data.body.results })
}
  
handleDropDownChange = (e) => {
  const value = e.target.value;
  this.setState({ dropdown: value});
  
}

  handleChange = (e) => {
    
    const value = e.target.value;
    this.setState({ search: value});
  }

  handleClick = async () => {
    const search = this.state.search;
    this.setState({ loading: true })
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.dropdown}=${search}`);
    console.log(fetchedData)
    this.setState({ loading: false })
    this.setState({ data: fetchedData.body.results })
  }

  render() {
    console.log(this.state.data)

    return (
      <body> 
        <header>Pokedex</header>   
          <main>
              <SearchSection
            CallBackhandleChange={this.handleChange}
            CallBackhandleDropDownChange={this.handleDropDownChange}
            CallBackhandleClick={this.handleClick}
          /> 
          <div className="pokemon-area">
                <PokemonUL pokemon={this.state.data} />
          </div>
        </main>
      </body>
    )
  }
}  
         
        

