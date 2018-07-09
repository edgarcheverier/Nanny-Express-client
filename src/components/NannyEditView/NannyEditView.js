import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Page, Toolbar, Icon, ToolbarButton, ListItem, List, Fab, ProgressCircular } from 'react-onsenui';
import ons from 'onsenui';
import {API} from '../../store/middlewares/apiService';

class NannyEditView extends Component {
  state = {
    redirectToNannyform: false,
    redirectToDashboard: false,
    redirectToNanny: false,
    nannySelected: null
  }
  
  renderToolbar = () =>  {
    return (
      <Toolbar>
        <div className='center'>Your Nannies</div>
        <div className='left'>
          <ToolbarButton>
            <Icon onClick={this.redirectToDashboard} icon='md-arrow-left'></Icon>
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }

  editYourNanny = (index) => {
    this.props.user.nannies.splice(index, 1);
    this.props.updateUser(this.props.user);
  }

  handleOnClick = (nanny) => {
    this.setState({nannySelected: nanny, redirectToNanny: true})
   }

  renderRows = () => {
    if (!this.props.user.nannies) return null;
      return this.props.user.nannies.map((nanny, index) => {
        return <ListItem key={nanny.photo} onClick={() => {this.handleOnClick(nanny)}}>
          <div className='left'>
            <img src={nanny.photo} className='list-item__thumbnail' />
          </div>
          <div className='center'>
            {nanny.name}
          </div>
          <div className='right'>
            <Icon icon='md-delete' onClick={() => this.editYourNanny(index)}/>
          </div>
        </ListItem>
      })
  }

  redirectToNannyform = () => {
    this.setState({redirectToNannyform: true});
  }
  redirectToDashboard = () => {
    this.setState({redirectToDashboard: true});
  }

  renderFixed = () => {
    return (
      <Fab
        style={{backgroundColor: ons.platform.isIOS() ? '#4282cc' : null}}
        onClick={this.redirectToNannyform} 
        position='bottom right'>
        <Icon icon='md-face'/>
      </Fab>
    );
  }

  render() {
    if(this.state.redirectToNannyform) return <Redirect to='/nannyform' /> 
    if(this.state.redirectToDashboard) return <Redirect to='/dashboard' />
    if(this.state.redirectToNanny) return <Redirect to={{pathname:'/nannyview', state:{nanny: this.state.nannySelected}}} />
    if(this.props.user) {
      return (
        <Page renderToolbar={this.renderToolbar} renderFixed={this.renderFixed}>
          <List> 
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
  updateUser: (user) => dispatch({
    type: 'FETCH_UPDATE_USER',
    data: user,
    [API]: {
      url: '/user',
      method: 'PUT',
    }
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(NannyEditView);
