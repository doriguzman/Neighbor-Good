import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import NeighborGood from './components/neighborGood'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/NeighborGood'>Home</Link>{" "}
          <Link to='/NeighborGood/Map'>Map</Link>
        </nav>
        <Route path='/NeighborGood' component={NeighborGood}/>
      </div>
    );
  }
}

export default App;
