import React, {Component} from 'react';

class CharacterList extends Component {

  constructor(props) {
    super()
    this.state = {
      list: [],
    }
  }
  // on click event on the name of the character in the list
  sendDataToProfile(name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => response.json())
    .then(data => {
      // sends the data to the parent
      this.props.sendData(data);
    })
  }
  // once the component is mounted make the call to the api
  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(response => response.json())
    .then(data => {
      // map the array to return character names
      let characters = data.results.map((character) => {
        return (
          // display the names in a div and attach a click event to send
          // the data to the profile through the parent app
          <div key={character.name} onClick={ () => this.sendDataToProfile(character.name) }>
             {character.name}
         </div>
        )
      })
      // set the state of the list to display on this list component
      this.setState({list:characters});
    })
  }
  render () {
    return (
      <div className='characters'>
        <h2 className="center">Pokemon</h2>
        <div className='list noselect'>
          {this.state.list}
        </div>
      </div>
    )
  }
}

export default CharacterList
