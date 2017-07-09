import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Logic} from './components/Logic.js' ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to GST Rate Finder</h2>
        </div>
        <p className="App-intro">
          The Goods & Service Tax or GST is one of the biggest fiscal reforms in India since Independence.
          All businesses, small or large, will be impacted by this new indirect tax regime.GST will be levied
          on both goods and services and will subsume and replace the current indirect taxes such as excise, VAT, and service tax..
        </p>
        <Logic />
      </div>
    );
  }
}

export default App;
