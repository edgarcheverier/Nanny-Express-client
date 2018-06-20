import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomeView from './WelcomeView';
import DashboardView from './DashboardView';
import NannyEditView from './NannyEditView';
import NannyFormView from './NannyFormView';

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={WelcomeView}/>
          <Route path='/dashboard' component={DashboardView}/>
          <Route path="/nannyedit" component={NannyEditView} />
          <Route path='/nannyform' component={NannyFormView} />
        </Switch>
      </div>
    )
  }
}
