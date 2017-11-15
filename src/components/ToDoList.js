import React, { Component } from 'react';
/*local Components*/
import Button from './Button';
import TextTitle from './TextTitle';
import Text from './Text';


export default class ToDoList extends Component {
  render(){
    return (
      <div className="ToDoList component">
        <Button text=" + " type="btn-circle" indentifier="btn-add" title="Add New"/>

        <div className="todo-form">
          <div className="input-group form-input-text todo-input-title">
            <Text 
              customClassName="input-group-title" 
              text="Title"/>
            <input type="text" className="input-text" value=""/>
          </div>
          <div className="input-group form-input-date todo-input-date">
            <Text 
              customClassName="input-group-date" 
              text="Date"/>
            <input type="date" className="input-date disabled" value="" />
          </div>
          <div className="input-group form-textarea withTitle todo-input-description">
            <Text 
              customClassName="input-group-Description" 
              text="Description"/>
            <textarea className="form-textarea"></textarea>
          </div>
        </div>

        <Button text="Categorize" indentifier="btn-categorize" title="Go to Categorize all Project"/>

        <div className="todo-list-container">
          <TextTitle 
            text="To Do Descategorize Projects"
            type="subtitle"/>
          <ul className="todo-list component">
            <li className="todo-item component">
              <Text 
                text="Something" 
                customClassName="item-title" />
              <Button indentifier="item-remove btn-red" text="Remove" />
              <Button indentifier="item-categorize btn-red" text="Categorize" />
            </li>
            <li className="todo-item component">
              <Text 
                text="Something" 
                customClassName="item-title" />
              <Button indentifier="item-remove btn-red" text="Remove" />
              <Button indentifier="item-categorize btn-red" text="Categorize" />
            </li>
          </ul>
        </div>
      </div>
    )
  }
};
