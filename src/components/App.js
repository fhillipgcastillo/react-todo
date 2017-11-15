import React, { Component } from 'react'

import Navbar from './Navbar';
import TDL from './ToDoList';
import TextTitle from './TextTitle';


export default class App extends Component {
  render(){
    console.log(Navbar);
    return (
      <div className="app">
        <TextTitle 
            text="To Do Project Prioritizer"
            type="title"
            customClassName="Header component"/>
        <Navbar />
        <TDL />
      </div>
    );
  };
};
