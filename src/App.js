import React, { Component } from 'react';
import { Link, Switch, Route} from 'react-router-dom'; 
import './App.css';
import NeighborGood from './components/neighborGood'
import Home from './components/Home/Home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav>
          <Link to='/'>Home</Link>{" "}
          <Link to='/NeighborGood/Map'>Map</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/NeighborGood' component={NeighborGood}/>
        </Switch>
        
        
      </div>
    );
  }
}

export default App;
