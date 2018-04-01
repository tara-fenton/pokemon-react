import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterSearch from './CharacterSearch.js';
import CharacterList from './CharacterList.js';
import CharacterProfile from './CharacterProfile.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterName: null,
      characterWeight: null,
      characterAbilities: null
    };
    this.getData = this.getData.bind(this)
  }
  // data sent from list to pass to profile
  getData(val){
    console.log("value in get data ",val);
    this.setState({
      characterName: val.name,
      characterWeight: val.weight,
      // map through the array of abilities
      characterAbilities: val.abilities.map(ability =>
        <div key={ability.ability.name} >
          {ability.ability.name}
        </div>
      )
    })
  }
  render() {
    return (
      <div className="App">
        <div className="left">
          <CharacterSearch />
          <CharacterList sendData={this.getData}/>
        </div>
        <div className="right">
          <CharacterProfile
            passedNameValue={this.state.characterName}
            passedWeightValue={this.state.characterWeight}
            passedAbilitiesValue={this.state.characterAbilities}
          />
        </div>
      </div>
    );
  }
}

export default App;
