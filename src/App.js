import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from "react-router-dom";
import SearchPage from './SearchPage.js';
import DetailsPage from './DetailsPage.js';


export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    Header
                </div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                        <Route 
                            path="/pokemon/:pokemon" 
                            render={(routerProps) => <DetailsPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}