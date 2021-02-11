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

const estouAprendendo = (content) => {
  return (
    <h2>Estou aprendendo { content }</h2>
  )
}

function App() {
  return (
  <div>
    <Texto />
    { estouAprendendo('React') }
  </div>
  );
}

export default App;
