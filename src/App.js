import React, { Component } from 'react';
import { Link, Switch, Route} from 'react-router-dom'; 
import './App.css';
import TopHome from './top_home.js';
import NeighborGood from './components/neighborGood'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={TopHome}/>
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
