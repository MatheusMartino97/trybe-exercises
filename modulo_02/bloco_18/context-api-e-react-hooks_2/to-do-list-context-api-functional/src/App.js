import './App.css';

import Provider from './contexts/ToDoListContext';

import Inputs from './components/Inputs';
import Tasks from './components/Tasks';

function App() {
  return (
    <Provider>
      <Inputs />
      <Tasks />
    </Provider>
  );
}

export default App;
