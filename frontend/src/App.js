import React, { Component } from 'react';
import './App.css';
import {Redirect,Route} from 'react-router-dom'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
            <Route exact path="/" render={Main} />
        </main>
      </div>
    );
  }
}

export default App;
