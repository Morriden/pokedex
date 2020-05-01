import React, { Component } from 'react'

export default class SearchSection extends Component {
    render() {
        return (
            
                <div className="search-area"> 
                        
                <input onChange={this.props.CallBackhandleChange}/>
                <button onClick={this.props.CallBackhandleClick}>Search</button>  
                <select onChange={this.props.CallBackhandleDropDownChange}>
                    <option value="pokemon">Filter by Pokemon</option>
                    <option value="type">Filter by Type</option>
                    <option value="attack">Filter by Attack</option>
                    <option value="defense">Filter by Defense</option>
                </select> 
                </div>
            
        )
    }
}


{/* <div>
<header>Pokedex</header>
<div className="search-area"> 
    <div>
        {(this.state.dropdown === 'pokemon') && <input onChange={this.handleChange}/>}
        {(this.state.dropdown === 'type')  && <input onChange={this.handleChange}/>}
        {(this.state.dropdown === 'attack')  && <input type='number' onChange={this.handleChange}/>}
        {(this.state.dropdown === 'defense')  && <input type='number' onChange={this.handleChange}/>}
    </div>
<button onClick={this.handleClick}>Search</button>  
<select onChange={this.handleDropDownChange}>
    <option value="pokemon">Filter by Pokemon</option>
    <option value="type">Filter by Type</option>
    <option value="attack">Filter by Attack</option>
    <option value="defense">Filter by Defense</option>
</select>

</div>    
</div> */}
                    
               
