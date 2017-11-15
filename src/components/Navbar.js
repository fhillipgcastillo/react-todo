  import React, {
    Component
  } from 'react';

  export default class Navbar extends Component {
    /*
     this will receibe the config for all the navs to show up
     for example: { url, component, title   }
    */
    render(){
      return (
        <div className="navbar-container component">
          <ul className="navbar">
            <li className="nav">Nav 1</li>
            <li className="nav">Nav 2</li>
            <li className="nav">Nav 3</li>
            <li className="nav">Nav 4</li>
          </ul>
        </div>
      )
    }
  };
