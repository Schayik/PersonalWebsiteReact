import React, { Component } from 'react';

import NavBar from './components/NavBar'
import PlayGame from './components/PlayGame'
import About from './components/About'
import Portfolio from './components/Portfolio'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <PlayGame />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    );
  }
}

export default App;
