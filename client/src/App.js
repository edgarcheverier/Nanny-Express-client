import React, { Component } from 'react'
import './App.css'
import Main from './Main'
import Welcome from './Welcome'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


class App extends Component {

  render () {
    return (
      <div>
        <Route exact path="/" component={Welcome}/>
        <Route path="/browse" component={Main}/>
      </div>
    )
  }
}

export default App
