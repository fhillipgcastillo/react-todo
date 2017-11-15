import React, {
  Component
} from 'react';

export default class ToDoList extends Component {
  render(){
    return (
      <div className="ToDoList component">

        <div className="btn btn-circle btn-add">
          <span className="btn-text" title="Add New"> + </span>
        </div>

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
            <textarea className="form-textarea">{""}</textarea>
          </div>
        </div>

        <div className="btn btn-default btn-categorize">
          <span className="btn-text" title="Add New"> Categorize </span>
        </div>

        <div className="todo-list-container">
          <h3>To Do List of items</h3>

          <ul className="todo-list component">
            <li className="todo-item component">
              <span className="item-title">Something</span>
              <span className="item-remove btn btn-default btn-red">Something</span>
              <span className="item-categorize btn btn-default">Categorize</span>
            </li>
            <li className="todo-item component">
              <span className="item-title">Something</span>
              <span className="item-remove btn btn-default btn-red">Something</span>
              <span className="item-categorize btn btn-default">Categorize</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
};
