import React, { Component } from 'react'
import './StartPage.css'

class StartPage extends Component {
  constructor(props) {
    super(props)

    this.loggedIn = this.loggedIn.bind(this)
  }

  loggedIn() {
    console.log('meh')
    // make check for login here
    this.props.history.push('/vote')
  }

  render() {
    return (
      <div className="StartPage">
        <div className="StartPage-up">
          <div className="StartPage-up-logo-container">
            <img className="StartPage-up-logo" src="http://koyilandykoottam.in/images/home/logo.png"/>
          </div>
          <div className="StartPage-up-poy">PERSON OF THE YEAR</div>
        </div>
        <div className="StartPage-down">
          <button className="StartPage-facebook-login" onClick={this.loggedIn}>
            Login with facebook
          </button>
        </div>
      </div>
    )
  }
}

export default StartPage
