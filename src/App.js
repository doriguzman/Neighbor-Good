import React, { Component } from 'react';
import { Link, Switch, Route} from 'react-router-dom'; 
import './App.css';
import TopHome from './top_home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to='/'>Home</Link>
        <Switch>
          <Route exact path='/' component={TopHome}/>
        </Switch>
      </div>
    );
  }
}

export default App;
