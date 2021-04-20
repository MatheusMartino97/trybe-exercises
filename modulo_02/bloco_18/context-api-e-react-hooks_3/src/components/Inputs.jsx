import React, { useContext } from 'react';
import { ToDoListContext } from '../contexts/ToDoListContext';

const Inputs = () => {
  const { handleChange, handleClick, task } = useContext(ToDoListContext)
  return (
    <div>
      <form action="">
        <fieldset>
          <legend>Tarefa</legend>
          <input
            type="text"
            placeholder="Tarefa"
            name="task"
            onChange={handleChange}
            value={task}
          />
          <button type="button" onClick={handleClick}>
            Adicionar tarefa
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Inputs;
