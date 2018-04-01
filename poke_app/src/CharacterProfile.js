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
          <div className="item">Name: {this.props.passedNameValue}</div>
          <div className="item">Weight: {this.props.passedWeightValue}</div>
          <div className="item">Abilities: {this.props.passedAbilitiesValue}</div>
        </div>
      </div>
    )
  }
}

export default CharacterProfile
