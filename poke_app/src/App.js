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
    this.getData = this.getData.bind(this)
  }
  getData(val){
    // do not forget to bind getData in constructor
    console.log("value in get data ",val);
  }
  render() {
    return (
      <div className="App">
        <div className="left">
          <CharacterSearch />
          <CharacterList  sendData={this.getData}/>
        </div>
        <div className="right">
          <CharacterProfile  />
        </div>
      </div>
    );
  }
}

export default App;
