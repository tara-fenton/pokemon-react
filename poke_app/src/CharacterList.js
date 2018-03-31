import React, {Component} from 'react';

class CharacterList extends Component {

  constructor(props) {
    super()
    this.state = {
      list: []
    }
  }
  //const API :
  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(response => response.json())
    .then(data => {
      let characters = data.results.map((character) => {
        return (
          <div key={character.name}>
            {character.name}
          </div>
        )
      })
      this.setState({list:characters});
    })
  }
  render () {
    return (
      <div className='characters'>
        <h2 className="center">Pokemon</h2>
        <div className='list'>{this.state.list}
        </div>
      </div>
    )
  }
}

export default CharacterList
