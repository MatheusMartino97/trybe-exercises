import React, { useContext } from 'react';
import { ToDoListContext } from '../contexts/ToDoListContext';

const Tasks = () => {
  const value = useContext(ToDoListContext)
  return (
    <ul>
      {value.taskList.map((task, index) => (
        <ul key={index}>{task}</ul>
      ))}
    </ul>
  );
};

export default Tasks;
