import React, { Component } from 'react'
import './VotingPage.css'

import PersonCard from '../../components/PersonCard/PersonCard'

class VotingPage extends Component {
  constructor(props) {
    super(props)

    this.personChosen = this.personChosen.bind(this)
    this.madeVote = this.madeVote.bind(this)
    this.isSelected = this.isSelected.bind(this)

    this.state = {
      selected: false,
      id: -1,
      people: [
        {
          id: 123,
          name: 'Arshak Anjum',
          image:
            'https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/19429842_1929945410364459_5443307805254880874_n.jpg?oh=5591c3e83f810fb112a62897040a4d75&oe=5AB8B468',
        },
        {
          id: 103,
          name: 'Dude With Huge Ass Fucking Name',
          image:
            'https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/19429842_1929945410364459_5443307805254880874_n.jpg?oh=5591c3e83f810fb112a62897040a4d75&oe=5AB8B468',
        },
        {
          id: 13,
          name: 'Abin Simon',
          image:
            'https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/21740060_1526291050794595_6392279493815452123_n.jpg?oh=12c57336dba09f504c8cb8bd8ae702ee&oe=5AF8C3F6',
        },
        {
          id: 1232,
          name: 'Arshak Anjum',
          image:
            'https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/19429842_1929945410364459_5443307805254880874_n.jpg?oh=5591c3e83f810fb112a62897040a4d75&oe=5AB8B468',
        },
        {
          id: 1032,
          name: 'Dude With Big Name',
          image:
            'https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/19429842_1929945410364459_5443307805254880874_n.jpg?oh=5591c3e83f810fb112a62897040a4d75&oe=5AB8B468',
        },
        {
          id: 132,
          name: 'Abin Simon',
          image:
            'https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/21740060_1526291050794595_6392279493815452123_n.jpg?oh=12c57336dba09f504c8cb8bd8ae702ee&oe=5AF8C3F6',
        },
        {
          id: 1233,
          name: 'Arshak Anjum',
          image:
            'https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/19429842_1929945410364459_5443307805254880874_n.jpg?oh=5591c3e83f810fb112a62897040a4d75&oe=5AB8B468',
        },
        {
          id: 1033,
          name: 'Dude With Big Name',
          image:
            'https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/19429842_1929945410364459_5443307805254880874_n.jpg?oh=5591c3e83f810fb112a62897040a4d75&oe=5AB8B468',
        },
        {
          id: 133,
          name: 'Abin Simon',
          image:
            'https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/21740060_1526291050794595_6392279493815452123_n.jpg?oh=12c57336dba09f504c8cb8bd8ae702ee&oe=5AF8C3F6',
        },
      ],
    }
  }

  personChosen(id) {
    console.log('Chosen person: ', id)
    this.setState({
      ...this.state,
      selected: true,
      id,
    })
  }

  madeVote() {
    let id = this.state.id
    console.log('Vote made: ', id)
    // do the post selection code here
  }

  isSelected(id) {
    return this.state.selected && this.state.id === id
  }

  render() {
    return (
      <div className="VotingPage">
        <div className="App-header">Person of the year</div>
        <div className="App-content">
          <div className="App-people">
            <br />
            {this.state.people.map(person => (
              <div
                key={person.id}
                className="App-people-container"
                onClick={() => this.personChosen(person.id)}>
                <PersonCard person={person} selected={this.isSelected(person.id)} />
              </div>
            ))}
          </div>
          <button className="App-vote" onClick={this.madeVote}>
            Make vote
          </button>
        </div>
      </div>
    )
  }
}

export default VotingPage
