import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomeView from './WelcomeView';
import SideMenu from './SideMenu';
import NannyEditView from './NannyEditView';
import NannyFormView from './NannyFormView';
import NannyView from './NannyView';

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={WelcomeView}/>
          <Route path='/dashboard' component={SideMenu}/>
          <Route path="/nannyedit" component={NannyEditView} />
          <Route path='/nannyform' component={NannyFormView} />
          <Route path='/nannyview' component={NannyView} />
        </Switch>
      </div>
    )
  }
}
