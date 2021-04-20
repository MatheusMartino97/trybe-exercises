import React, { createContext, useState } from 'react';

export const ToDoListContext = createContext();

const Provider = ({ children }) => {
  const [toDoListState, setToDoListState] = useState({
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
