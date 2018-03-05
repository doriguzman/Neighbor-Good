import React, { Component } from 'react';
import { Link, Switch, Route} from 'react-router-dom'; 
import './CSS/App.css';
import NeighborGood from './components/neighborGood'
import Home from './components/Home/Home.js'

class App extends Component {
  render() {
    return (
      <div id='thewholething'>
     
<div id='navHolder'>
<div>
<img id='logo' src='https://thumbs.dreamstime.com/b/neighborhood-icon-vector-suburban-silhouette-design-element-43699957.jpg' height='90px'/>
<h2 id='logoName'> NeighborGood </h2>
</div>
      <nav>
          <li class='navlink'> <Link class='navlink-a' to='/'>Home</Link>{" "} </li>
          <li class='navlink'> <Link class='navlink-a' to='/NeighborGood/Map'>Map</Link>{" "} </li>
          <li class='navlink'> <Link class='navlink-a' to='/NeighborGood/Feed'>Feed</Link></li>
        </nav>
     </div>
 


        <Switch>
          <Route  exact path='/' component={Home}/>
          <Route path='/NeighborGood' component={NeighborGood}/>
        </Switch>
        </div>
      // </div>
    );
  }
}

export default App;
