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

  renderNannies = () => {
    if (!this.props.user.friends) return null;
    let nannyArray = [];
    this.props.user.friends.forEach(friend => {
      if (this.props.filter && this.props.filter !== friend.fbId) {
        //Do nothing
      } else {
        // console.log(this.props.user);
        friend.nannies.forEach(nanny => {
          nannyArray.push(
            <div className="DashboardView_nannies-card">
              <div className="DashboardView_nannies-wrapper">
                <img key={nanny.name} src={nanny.photo} className='DashboardView_nannies'
                  onClick={() => this.handleOnClickNanny(nanny)} />
              </div>
              <h3>{nanny.name}</h3>
            </div>
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
        {this.renderNannies()}
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
