import React, { Component } from 'react';
import './DashboardView.css';
import { connect } from 'react-redux';
import { Page, List, ListItem, ListHeader } from 'react-onsenui';
const filter = null;

class DashboardView extends Component {
  renderToolbar = () => {
    return (
      <div></div>
    );
  }

  renderRows = () => {
    if (!this.props.user.friends) return null;
    let nannyArray = [];
    this.props.user.friends.forEach(friend => {
      if (filter && filter !== friend.fbId) {
        //Do nothing
      } else {
        friend.nannies.forEach(nanny => {
          nannyArray.push(
          <ListItem key={nanny.name}>
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
    return (
      <Page className='DashboardView' renderToolbar={this.renderToolbar}>
        <List renderHeader={() => <ListHeader>All Nannies</ListHeader>}> 
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