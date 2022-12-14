import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'



import './style.css'
import ComingSoon from './views/coming-soon'
import Profile from './views/profile'
import Home from './views/home'
import Home2 from './views/home2'
import Hoja from "./views/Hoja";

const App = () => {
  return (
    <Router>
      <div>
        <Route component={ComingSoon} exact path="/coming-soon" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Home} exact path="/" />
        <Route component={Home2} exact path="/home2"/>
        <Route component={Hoja} exact path="/hoja"/>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
