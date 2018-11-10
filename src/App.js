import React from 'react'
import './App.css';

import Header from './components/Header'
import Body from './components/Body'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={    
        render: false,
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;