import React, { Component } from 'react'
import ToDoListContext from '../contexts/ToDoListContext'

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
    const { children } = this.props;

    return (
      <ToDoListContext.Provider value={ {
        handleChange: this.handleChange,
        handleClick: this.handleClick,
        taskList,
        task,
      } }>
        {children}
      </ToDoListContext.Provider>
    );
  }
}

export default ToDoList
