import React from 'react';

import './index.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'

import Connect from './pages/Connect';
import About from './pages/About';


function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path='/' component={Home} />

          <Route exact path='/about' component={About} />
          <Route exact path='/connect' component={Connect} />
        </Switch>

      </div>
    </Router>
  )
}

export default App;
