import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="app-header">
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
