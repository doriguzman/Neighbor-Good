import React, { Component } from 'react';
import { Link, Switch, Route} from 'react-router-dom'; 
import './App.css';
import NeighborGood from './components/neighborGood'
import Home from './components/Home/Home.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>{" "}
          <Link to='/NeighborGood/map'>Map</Link>
          <Link to= '/NeighborGood/recentcomplaints'>Recent Complaints</Link>
        </nav>
        <Route exact path='/' component={Home} />
        <Route exact path='/NeighborGood' component={NeighborGood}/>
      </div>
    );
  }
}

export default App; 
