import React, { Component } from 'react'
import './App.css';

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar']


class Texto extends Component {
  render() {
    return (
    <div>
      <h1>Matheus</h1>
      <p>Teste</p>
    </div>
    );
  }
}

function App() {
  return (
  <div>
    <Texto />
  </div>
  );
}

export default App;
