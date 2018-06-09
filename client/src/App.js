import React, { Component } from 'react'
import './App.css'
import Main from './Main'
import Welcome from './Welcome'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import DetailView from './DetailView'
import FilteredList from './FilteredList'

class App extends Component {

  render () {
    return (
      <div>
        <Route exact path="/" component={Welcome}/>
        <Route path="/browse" component={Main}/>
        {/* <Route path="/browse/:reference" component = {FilteredList}/> */}
        {/* <Route path="/browse/:reference/:id" component={DetailView}/> */}
      </div>
    )
  }
}

export default App
