import React, { Component } from 'react';
import Button from './Button';


export default class ToDoList extends Component {
  render(){
    return (
      <div className="ToDoList component">
        <Button text=" + " type="btn-circle" indentifier="btn-add" title="Add New"/>

        <div className="todo-form">
          <div className="input-group form-input-text todo-input-title">
            <span className="input-group-title">Title</span>
            <input type="text" className="input-text" value=""/>
          </div>
          <div className="input-group form-input-date todo-input-date">
            <span className="input-group-title">Date</span>
            <input type="date" className="input-date disabled" value="" />
          </div>
          <div className="input-group form-textarea withTitle todo-input-description">
            <span className="input-group-title">Description</span>
            <textarea className="form-textarea"></textarea>
          </div>
        </div>

        <Button text="Categorize" indentifier="btn-categorize" title="Go to Categorize all Project"/>

        <div className="todo-list-container">
          <h3>To Do List of items</h3>

          <ul className="todo-list component">
            <li className="todo-item component">
              <span className="item-title">Something</span>
              <Button indentifier="item-remove btn-red" text="Remove" />
              <Button indentifier="item-categorize btn-red" text="Categorize" />
            </li>
            <li className="todo-item component">
              <span className="item-title">Something</span>
              <Button indentifier="item-remove btn-red" text="Remove" />
              <Button indentifier="item-categorize btn-red" text="Categorize" />
            </li>
          </ul>
        </div>
      </div>
    )
  }
};
