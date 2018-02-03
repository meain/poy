import React, { Component } from 'react'
import './PersonCard.css'

import { Icon } from 'react-fa'

class PersonCard extends Component {
  render() {
    return (
      <div className={this.props.selected ? 'PersonCard PC-selected' : 'PersonCard'}>
        <label class="container">
          <input type="checkbox" checked={this.props.selected} />
          <span class="checkmark" />
        </label>
        {/* <input type="checkbox" checked={this.props.selected} className="PersonCard-checkbox" /> */}
        <div className="PersonCard-image-container">
          <img
            className="PersonCard-image"
            src={this.props.person.image}
            alt={this.props.person.name}
          />
        </div>
        <div className="PersonCard-data">
          <div className="PersonCard-name">{this.props.person.name}</div>
          <div className="PersonCard-desc">Woopsie, there you go.</div>
        </div>
      </div>
    )
  }
}

export default PersonCard
