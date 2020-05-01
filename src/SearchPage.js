import React, { Component } from 'react'
import request from 'superagent'
import './App.css'
import PokemonUL from './PokemonUL.js'

export default class SearchPage extends Component {


state = {
  search: '',
  dropdown: 'pokemon',
  data: [],
}

async componentDidMount() {
  const search = this.state.search;
  const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.dropdown}=${search}`)
  this.setState({ quotes: data.body.results })
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
                <PokemonUL pokemon={this.state.data} />
              </div>
      
      </main>
    )
  }
}  
         
        

