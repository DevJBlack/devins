import React , { Component } from 'react';

export default class GrandChild extends Component{
  render(){
    console.log("FROM CHILD TO GRANDCHILD: " , this.props)
    return(
      <p>Hi! My name is GrandChild.</p>
    )
  }
}