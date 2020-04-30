import React, { Component } from 'react'
import request from 'superagent';
import PokemonList from './PokemonList.js'
import app from './App.css'

export default class App extends Component {

state = {
  search: '',
  drowdown: 'pokemon',
  data: [],
}

  
handleDropDownChange = (e) => {
  const value = e.target.value;
  this.setState({ dropdown: value});
  console.log(value, '1')
  
}

// handleDropDown2Change = (e) => {
//   const value = e.target.value;
//   this.setState({ dropdown2: value});
//   console.log(value, '3')
  
// }
  // Can I add in multiple updates in one handle change?
  // handleChange = (e) => {
  //   const value = e.target.value;
  //   this.setState({ search: value});
  //   this.setState({ searchType: value});
  //   this.setState({ searchStat: value});
  //   console.log(value, '1')
    
  // }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ search: value});
    console.log(value, '2')
    
  }

  handleClick = async () => {
    const search = this.state.search;
    // const searchStat = this.state.searchStat; //if else for different links on choices.
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.dropdown}=${search}`);
    console.log(fetchedData)
    this.setState({ data: fetchedData.body.results })

  }

  render() {
    console.log(this.state.data)

    return (
      
      <main>
          <section>
              <select onChange={this.handleDropDownChange}>
                <option value="pokemon">Filter by Pokemon</option>
                <option value="type">Filter by Type</option>
                <option value="attack">Filter by Attack</option>
                <option value="defense">Filter by Defense</option>
                </select>
              </section>



        <div>
            {(this.state.dropdown === 'pokemon') && <input onChange={this.handleChange}/>}
            {(this.state.dropdown === 'type')  && <input onChange={this.handleChange}/>}
            {(this.state.dropdown === 'attack')  && <input type='number' onChange={this.handleChange}/>}
            {(this.state.dropdown === 'defense')  && <input type='number' onChange={this.handleChange}/>}
            
          <button onClick={this.handleClick}>Search</button>
          <PokemonList pokemon={this.state.data} />
        </div>

        <section>
          
          <ul className="list-container">
            {this.state.data.map(pokemon => (<li className="data-item" >
              <div>
                  <div>
                    <img 
                      alt={pokemon.url_image}
                      src={pokemon.url_image} />
                  </div>
              <h3>{pokemon.pokemon}</h3>
              
              <span>Type 1: {pokemon.type_1} Type 2: {pokemon.type_2}</span>
              <span> Attack: {pokemon.attack} Defense: {pokemon.defense}</span>
              </div>


            </li>))}
          
          
          </ul>
        </section>


      </main>
    )
  }
}