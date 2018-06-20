import React, { Component } from 'react';
import './DashboardView.css';
import { connect } from 'react-redux';
import { Page, List, ListItem, ListHeader, Button } from 'react-onsenui';
import { Redirect } from 'react-router';
const nannies = [
  {name: 'Ben Kemp', photo: 'https://scontent.fbcn1-1.fna.fbcdn.net/v/t1.0-1/c0.0.320.320/p320x320/14572798_10154209134387800_8782630702405078484_n.jpg?_nc_cat=0&oh=fb8c015d04ef6b321d42e4a67fe01d30&oe=5BB3FEE5'},
  {name: 'Lars Hack', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/2000px-Anonymous.svg.png'},
];
class DashboardView extends Component {

  renderToolbar = () => {
    return (
      <div></div>
    );
  }

  renderRows = () => {
    if (!this.props.user.nannies) return null;
    console.log('iinside renderRows: ', this.props.user)
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