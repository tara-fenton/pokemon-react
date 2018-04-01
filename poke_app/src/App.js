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
      listDataFromChild: null
    };
  }
  
  render() {
    return (
      <div className="App">
        <div className="left">
          <CharacterSearch />
          <CharacterList />
        </div>
        <div className="right">
          <CharacterProfile />
        </div>
      </div>
    );
  }
}

export default App;
