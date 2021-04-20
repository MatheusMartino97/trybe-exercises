import { useState } from 'react';

const useArray = (state) => {
  const [toDoListState, setToDoListState] = useState(state);

  return [toDoListState, setToDoListState]
}

export default useArray