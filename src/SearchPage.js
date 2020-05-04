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
  page: 1,
  info: {}
}

// async componentDidMount() {
//   const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`)
//   this.setState({ data: data.body.results })
// }

async componentDidMount() {
  const searchParams = new URLSearchParams(window.location.search)
  const search = searchParams.get('search');
  const filter = searchParams.get('dropdown')

  this.setState( {search, dropdown: filter});

  if (search){
    let page = 1;
    if (searchParams.get('page')){
      page = searchParams.get('page');
    }
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${filter || this.state.dropdown}=${search}&page=${page}`)
    const data = fetchedData.body.results;
    const info = fetchedData.body.info;
    this.setState({ data: data, info: info })
  }
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
    this.setState({ loading: true })
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.dropdown}=${this.state.search}&page=${this.state.page}`);
    const info = fetchedData.body.info;
    this.setState({ loading: false })
    this.setState({ data: fetchedData.body.results, info: info })
    }

    routeToNextPage = async () => {
      const nextPageNumber = this.state.page + 1;
      this.setState({ page: nextPageNumber })
      console.log(this.state.page)
      const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.dropdown}=${this.state.search}&page=${nextPageNumber}`)
      console.log(fetchedData)
      const data = fetchedData.body.results;
      const info = fetchedData.body.info;
      this.setState({ data: data, info: info, page: nextPageNumber})
    }

    routeToPreviousPage = async () => {
      const previousPageNumber = this.state.page - 1;
      this.setState({ page: previousPageNumber })

      const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.dropdown}=${this.state.search}&page=${previousPageNumber}`)
      const data = fetchedData.body.results;
      const info = fetchedData.body.info;
      this.setState({ data: data, info: info })
    }

  render() {
    return (
      <body> 
        <header>
          {this.state.page && <button onClick={this.routeToPreviousPage}>Previous</button>}
          Pokedex
          {this.state.page && <button onClick={this.routeToNextPage}>Next</button>}
        </header>    <main>
              <SearchSection selectedFilter={this.state.dropdown}
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
         
        

