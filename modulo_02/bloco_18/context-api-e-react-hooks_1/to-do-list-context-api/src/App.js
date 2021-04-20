import './App.css';

import ToDoList from './pages/ToDoList';

import Inputs from './components/Inputs';
import Tasks from './components/Tasks';

function App() {
  return (
    <ToDoList>
      <Inputs />
      <Tasks />
    </ToDoList>
  );
}

export default App;
