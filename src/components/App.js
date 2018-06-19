import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomeView from './WelcomeView';
import DashboardView from './DashboardView';
import NavBar from './NavBar';

export default class App extends Component {
  render () {
    return (
      <div className="App">
      <NavBar />
        <Switch>
          <Route exact path='/' component={WelcomeView}/>
          <Route path='/dashboard' component={DashboardView}/>
        </Switch>
      </div>
    )
  }
}
