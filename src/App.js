import React, { Component } from 'react';
import Child from './componets/child'



class App extends Component {

  state = {
    words: "Hello there!"
  }

  changeWords = (pookie) => {
    this.setState({
      words: pookie,
      numbers: 90,
    })
  }
  
  render() {
    console.log("FROM INDEX TO APP: " , this.props)
    return (
      <div className="App">
       Hello Friend
       {/* Remember: components can pass data down to children, but children cannot pass up to parents. */}
       <Child hello={this.state.words} yourVersionOfChangeWords={this.changeWords} />
      </div>
    );
  }
}

export default App;
