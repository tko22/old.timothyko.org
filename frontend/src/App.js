import React, { Component } from 'react';
import './App.css';
import {Redirect,Route} from 'react-router-dom'
import Main from './components/Main'
import Header from "./components/Header"
import 'animate.css/animate.css';
import ResumePage from "./components/ResumePage";
import Footer from "./components/Footer";

class App extends Component {
  render() {
      return (
          <div className="App">
              <Header/>
              <main>
                  <Route exact path="/" component={Main} />
                  <Route exact path="/projects" component={ResumePage}/>
              </main>
              <Footer/>
          </div>
      );
  }
}

export default App;
