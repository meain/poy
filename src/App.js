import React, { Component } from 'react'
import './App.css'

import StartPage from './components/StartPage/StartPage'
import VotingPage from './components/VotingPage/VotingPage'

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-background" />
          <Route exact path="/" component={StartPage} />
          <Route path="/vote" component={VotingPage} />
        </div>
      </Router>
    )
  }
}

export default App
