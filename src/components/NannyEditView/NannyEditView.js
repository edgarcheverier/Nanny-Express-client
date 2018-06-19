import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Page, Toolbar, Icon, ToolbarButton, ListItem, List, ListHeader, Fab } from 'react-onsenui';
import ons from 'onsenui';

class NannyEditView extends Component {
  state = {
    redirec: false
  }
  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Your Nannies</div>
        <div className='left'>
        <ToolbarButton>
          <Icon icon='md-arrow-left'></Icon>
        </ToolbarButton>
        </div>
      </Toolbar>
    );
  }
  renderRow(row, index){
    const x = 40 + Math.round(5 * (Math.random() - 0.5)),
          y = 40 + Math.round(5 * (Math.random() - 0.5));

    const names = ['Max', 'Chloe', 'Bella', 'Oliver', 'Tiger', 'Lucy', 'Shadow', 'Angel'];
    const name = names[Math.floor(names.length * Math.random())];

    return (
      <ListItem key={index}>
        <div className='left'>
          <img src={`http://placekitten.com/g/${x}/${y}`} className='list-item__thumbnail' />
        </div>
        <div className='center'>
          {name}
        </div>
      </ListItem>
    );
  }

  addNewNanni = () => {
    this.setState({redirec: true});
  }

  renderFixed = () => {
    return (
      <Fab
        style={{backgroundColor: ons.platform.isIOS() ? '#4282cc' : null}}
        onClick={this.addNewNanni} 
        position='bottom right'>
        <Icon icon='md-face'/>
      </Fab>
    );
  }

  render() {
    if(this.state.redirec) return <Redirect to='/nannyfrom' />
    return (
    <Page renderToolbar={this.renderToolbar} renderFixed={this.renderFixed}>
      <List
        dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        renderRow={this.renderRow}
        renderHeader={() => <ListHeader>Nannies</ListHeader>}
      />
    </Page>
    )
  }
}

export default NannyEditView;
