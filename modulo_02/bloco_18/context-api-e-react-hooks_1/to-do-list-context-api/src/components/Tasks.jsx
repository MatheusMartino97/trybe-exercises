import React, { Component } from 'react';
import ToDoListContext from '../contexts/ToDoListContext';

class Tasks extends Component {
  render() {
    return (
      <ul>
        <ToDoListContext.Consumer>
          {(value) => value.taskList.map((task) => <ul key={ task }>{task}</ul>)}
        </ToDoListContext.Consumer>
      </ul>
    );
  }
}

export default Tasks;
