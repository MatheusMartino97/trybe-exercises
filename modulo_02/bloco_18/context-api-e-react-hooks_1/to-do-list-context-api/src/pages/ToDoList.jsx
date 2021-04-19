import React, { Component } from 'react'
import ToDoListContext from '../contexts/ToDoListContext'
import Inputs from '../components/Inputs';
import Tasks from '../components/Tasks';

class ToDoList extends Component {
  constructor() {
    super()

    this.state = {
      task: '',
      taskList: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value
    })
  }

  handleClick() {
    const { task } = this.state;
    
    this.setState((previousState) => ({
      task: '',
      taskList: [...previousState.taskList, task]
    }))
  }

  render() {
    const { taskList, task } = this.state;
    return (
      <ToDoListContext.Provider value={ {
        handleChange: this.handleChange,
        handleClick: this.handleClick,
        taskList,
        task,
      } }>
        <Inputs />
        <Tasks />
      </ToDoListContext.Provider>
    );
  }
}

export default ToDoList
