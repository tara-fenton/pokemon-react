import React, {Component} from 'react';

class CharacterList extends Component {

  constructor(props) {
    super()
    this.state = {
      list: [],
      oneCharacter: []
    }
  }
  sendDataToProfile(name) {
    console.log('clicked '+name)
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.oneCharacter = data;
      this.demoMethod()
    })
  }
  demoMethod(){
   this.props.sendData(this.oneCharacter);
  }
  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(response => response.json())
    .then(data => {
      let characters = data.results.map((character) => {
        return (
          <div key={character.name} onClick={ () => this.sendDataToProfile(character.name) }>
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
        <div className='list noselect'>
          {this.state.list}
        </div>
      </div>
    )
  }
}

export default CharacterList
