import React, { createContext } from 'react';
import useArray from '../hooks/useArray'

export const ToDoListContext = createContext();

const Provider = ({ children }) => {
  const [toDoListState, setToDoListState] = useArray({
    task: '',
    taskList: [],
  });

  const handleChange = ({ target: { name, value } }) => {
    setToDoListState({
      ...toDoListState,
      [name]: value,
    });
  };

  const handleClick = () => {
    const { task, taskList } = toDoListState;

    setToDoListState({
      task: '',
      taskList: [...taskList, task],
    });
  };

  const { taskList, task } = toDoListState;

  return (
    <ToDoListContext.Provider
      value={{
        handleChange,
        handleClick,
        taskList,
        task,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};

export default Provider;
