import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Page, Input, Toolbar, Icon, ToolbarButton, ListItem, List, ListHeader, Fab } from 'react-onsenui';
import ons from 'onsenui';

class NannyFormView extends Component {
  render() { 
    return (
      <Page>
        <p>
          <Input
          //value={this.state.username}
          //onChange={this.handleUsernameChange}
          modifier='underbar'
          float
          placeholder='Username' />
        </p>
        <p>
          <Input
          //value={this.state.username}
          //onChange={this.handleUsernameChange}
          modifier='underbar'
          float
          placeholder='Username' />
        </p>
        <p>
          <Input
          //value={this.state.username}
          //onChange={this.handleUsernameChange}
          modifier='underbar'
          float
          placeholder='Username' />
        </p>
        <p>
          <Input
          //value={this.state.username}
          //onChange={this.handleUsernameChange}
          modifier='underbar'
          float
          placeholder='Username' />
        </p>
      </Page>
    )
  }
}

export default NannyFormView;