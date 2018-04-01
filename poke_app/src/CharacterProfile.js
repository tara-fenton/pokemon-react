import React, {Component} from 'react';

class CharacterProfile extends Component {
  constructor(props) {
    super()
    this.state = {
      name: '',
      listDataFromChild: null
    }
  }

  render () {
    return (
      <div className='profile'>
        <h2 className="center">Poke Profile</h2>
        <div className="details">
          <div className="item">Name: {this.state.name}</div>
          <div className="item">Weight: </div>
          <div className="item">Abilities: </div>
        </div>
      </div>
    )
  }
}

export default CharacterProfile
