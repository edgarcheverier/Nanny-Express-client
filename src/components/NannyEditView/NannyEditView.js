import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Page, Toolbar, Icon, ToolbarButton, ListItem, List, ListHeader, Fab, ProgressCircular } from 'react-onsenui';
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

  renderRows = () => {
    if (!this.props.user.nannies) return null;
      return this.props.user.nannies.map((nanny) => {
        return <ListItem>
          <div className='left'>
            <img src={nanny.photo} className='list-item__thumbnail' />
          </div>
          <div className='center'>
            {nanny.name}
          </div>
        </ListItem>
      })
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
    if(this.props.user) {
      return (
        <Page renderToolbar={this.renderToolbar} renderFixed={this.renderFixed}>
          <List renderHeader={() => <ListHeader>All Nannies</ListHeader>}> 
            {this.renderRows()}
          </List>
        </Page>
      )
    } else {
        return (
          <div>
            <ProgressCircular indeterminate />
          </div> 
        )    
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  selectNanny: (nanny) => dispatch({
    type: 'SELECT_NANNY',
    data: nanny
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(NannyEditView);
