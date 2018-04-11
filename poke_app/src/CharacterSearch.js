import React, {Component} from 'react';

class CharacterSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: null
    }
  }

  handleKeyPress(e) {
     e.preventDefault();
     e.persist();
     console.log(e.target.value)
  //  this.val = e.target.value
   this.props.sendText(e.target.value);
  }
  render () {
    return (
      <div className='search'>
        <h2>Search</h2>
        <input type="text" onChange={this.handleKeyPress} />
        <button>GO!</button>
      </div>
    )
  }
}

export default CharacterSearch
