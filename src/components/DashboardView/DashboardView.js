import React, { Component } from 'react';
import './DashboardView.css';
import { connect } from 'react-redux';
import { Page, List, ListItem, ListHeader } from 'react-onsenui';
import SideMenu from '../SideMenu';
import { Redirect } from 'react-router';

class DashboardView extends Component {
  state = {
    redirectToNannyView: false,
    redirectToNannyViewState: null
  }

  handleOnClickNanny = (nanny) => {
    this.setState({
      redirectToNannyViewState: nanny,
      redirectToNannyView: true
    })
  }

  renderRows = () => {
    if (!this.props.user.friends) return null;
    let nannyArray = [];
    this.props.user.friends.forEach(friend => {
      if (this.props.filter && this.props.filter !== friend.fbId) {
        //Do nothing
      } else {
        friend.nannies.forEach(nanny => {
          nannyArray.push(
          <ListItem key={nanny.name} onClick={() => this.handleOnClickNanny(nanny)}>
            <div className='left'>
              <img src={nanny.photo} className='list-item__thumbnail' />
            </div>
            <div className='center'>
              {nanny.name}
            </div>
          </ListItem>
          );
        })
      }
    })
    return nannyArray;
  }

  render() {
   if (this.state.redirectToNannyView) return <Redirect to={{pathname:'/nannyview', state:{nanny:this.state.redirectToNannyViewState}}} />
    return (
      <Page className='DashboardView'>
        <List style={{marginTop: '44px'}}renderHeader={() => <ListHeader>All Nannies</ListHeader>}>
          {this.renderRows()}
        </List>
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
  filter: state.friendFilter,
  selectedNanny: state.selectNanny,
})

const mapDispatchToProps = (dispatch) => ({
  selectNanny: (nanny) => dispatch({
    type: 'SELECT_NANNY',
    data: nanny
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);
