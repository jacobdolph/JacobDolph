import React from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div>

        <Route exact path='/'>
          <Home />
        </Route>

      </div>
    </Router>
  )
}

export default App;
