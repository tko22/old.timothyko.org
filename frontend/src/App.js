import React, { Component } from 'react';
import './App.css';
import {Redirect,Route} from 'react-router-dom'
import Main from './components/Main'
import Header from "./components/header";
import 'animate.css/animate.css';
import ProjectsPage from "./components/ProjectsPage";

class App extends Component {
  render() {
      return (
          <div className="App">
              <Header/>
              <main>
                  <Route exact path="/" component={Main} />
                  <Route exact path="/projects" component={ProjectsPage}/>
              </main>
          </div>
      );
  }
}

export default App;
