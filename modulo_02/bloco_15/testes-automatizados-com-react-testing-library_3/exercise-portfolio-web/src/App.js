import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route path="/projects" component={ Projects } />
        <Route path="/contact" component={ Contact } />
        <Route path="/about" component={ About } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
