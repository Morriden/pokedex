import React, { Component } from 'react'
import request from 'superagent';
import PokemonList from './PokemonList.js'

export default class App extends Component {

state = {
  searchType: null,
  searchName: null,
  data: [],
}

  
  handleNameChange = (e) => {
    const value = e.target.value;
    this.setState({ searchName: value});
    
  }

  handleTypeChange = (e) => {
    const value = e.target.value;
    this.setState({ searchType: value});
    
  }

  handleClick = async () => {
    const searchName = this.state.searchName;
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${searchName}`);

    this.setState({ data: fetchedData.body.results })

  }

  handleTypeClick = async () => {
    const searchType = this.state.searchType;
    const fetchedData2 = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?type=${searchType}`);
    console.log(fetchedData2)
    this.setState({ data: fetchedData2.body.results })
  }



  render() {
    return (
      <main>
        <div>
          <input onChange={this.handleNameChange}/>
          <button onClick={this.handleClick}>Find Pokemon by Name!</button>
          <input onChange={this.handleTypeChange}/>
          <button onClick={this.handleTypeClick}>Find Pokemon by Type!</button>
          <PokemonList pokemon={this.state.data} />
        </div>

        <section>
          
          <ul>
            {this.state.data.map(pokemon => (<li className="data-item" >
              <h2>
              <h3>{pokemon.pokemon}</h3>
              <img 
                    alt={pokemon.url_image}
                    src={pokemon.url_image} />
                
              </h2>
              


            </li>))}
          
          
          </ul>
        </section>


      </main>
    )
  }
}



// const fetchedData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex/5cef3501ef6005a77cd4fd33')