import React, { Component } from 'react'
import './PersonCard.css'

import { Icon } from 'react-fa'

class PersonCard extends Component {
  render() {
    return (
      <div className={this.props.selected ? "PersonCard PC-selected" : "PersonCard"}>
        <div className="PersonCard-image-container">
          <img
            className="PersonCard-image"
            src={this.props.person.image}
            alt={this.props.person.name}
          />
        </div>
        <div className="PersonCard-name">{this.props.person.name}</div>
        <div className="PersonCard-vote-button">
          <Icon name="check-circle-o" />
        </div>
      </div>
    )
  }
}

export default PersonCard
