import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <nav id='nav bar'>Home  Map</nav>
      <div id='mapContainer'>
        <div className='map'></div>
        <div className='key'></div>
      </div>
      <div id='home'>
        <div className='title'></div>
        <div className='userstroies'></div>
      </div>
      </div>
    );
  }
}

export default App;
