import React, {
  Component
} from 'react'

import Navbar from './Navbar';
import TDL from './ToDoList';


export default class App extends Component {
  render(){
    console.log(Navbar);
    return (
      <div className="app">
        <h1 className="Header component">To Do Project Prioritizer</h1>
        <Navbar />
        <TDL />
      </div>
    );
  };
};
