import React, { Component } from 'react';
import ToDoListContext from '../contexts/ToDoListContext';

class Inputs extends Component {
  render() {
    return (
      <ToDoListContext.Consumer>
        {(value) => {
          return (
            <div>
              <form action="">
                <fieldset>
                  <legend>Tarefa</legend>
                  <input type="text" placeholder="Tarefa" name="task" onChange={ value.handleChange } value={ value.task } />
                  <button type="button" onClick={ value.handleClick }>Adicionar tarefa</button>
                </fieldset>
              </form>
            </div>
          );
        }}
      </ToDoListContext.Consumer>
    );
  }
}

export default Inputs;
