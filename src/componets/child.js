import React, { Component } from 'react';
import GrandChild from './GrandChild'




export default class Child extends Component{
  render () {
    console.log("FROM APP TO CHILD: " , this.props)
    return(
      <div>
        <button value="Devin" onClick={(e) => this.props.yourVersionOfChangeWords(e.target.value)} >PRESS ME!</button>
        <GrandChild />
      </div>
    )
  }
}


