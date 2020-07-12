import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import About from './pages/About';

function Title(props)
{
  return(
    <div className="judul">{props.title}</div>
  )
}


function App() {
  return (
    <Router>
      <div className="app-header">
        <Title title="Selamat datang !!!!" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
