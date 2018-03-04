import React, { Component } from 'react';
import { Link, Switch, Route} from 'react-router-dom'; 
import './App.css';
import NeighborGood from './components/neighborGood'
import Home from './components/Home/Home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
        <nav>
          <Link to='/'>Home</Link>{" "}
          <Link to='/NeighborGood/Map'>Map</Link>
        </nav>
        <Route path='/NeighborGood' component={NeighborGood}/>
      </div>
    );
  }
}

export default App;
