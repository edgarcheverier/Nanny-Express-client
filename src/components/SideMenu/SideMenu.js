import React, { Component } from 'react';
import { Toolbar, ToolbarButton, Icon, Splitter, SplitterSide, SplitterContent,
  Page, List, ListItem, Button } from 'react-onsenui';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import DashboardView from '../DashboardView';

class SideMenu extends Component {
 constructor (props) {
   super(props);
   this.state = {
    isOpen: false,
    redirectToEditNannies: false,
   }
 }

  renderToolbar = () => {
    return (
      <Toolbar>
        <div className='left'>
          <ToolbarButton onClick={this.show}>
            <Icon icon='ion-navicon, material:md-menu' />
          </ToolbarButton>
        </div>
        <div className='center'>Nanny Express</div>
      </Toolbar>
    );
  }

  hide = () => {
    this.setState({isOpen: false});
  }

  show = () => {
    this.setState({isOpen: true});
  }

  handleClickYourNannies = () => {
    this.setState({redirectToEditNannies: true});
  }

  filterNanny = (friend) => {
    this.props.filterNanny(friend.fbId);
    this.hide();
  }

  showAllNannies = () => {
    this.props.showAllNannies();
    this.hide();
  }

  render() {
    if (this.state.redirectToEditNannies) return <Redirect to='/nannyedit'/>
    return (
      <div className="SideMenu">
        <Splitter>
          <SplitterSide
            style={{
              boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
            }}
            side='left'
            width={200}
            collapse={true}
            swipeable={true}
            isOpen={this.state.isOpen}
            onClose={this.hide}
            onOpen={this.show}
          >
            <Page>
              {this.props.user.photo &&
                <img style={{  borderRadius: '15px', margin: '15px 0 0 45px'}}
                  src={this.props.user.photo}></img>}
              {this.props.user.name && <h3>{this.props.user.name}</h3>}
              <Button style={{margin: '6px'}} onClick={this.handleClickYourNannies}
              ><i className="zmdi zmdi-edit"></i> Your nannies</Button>
              <ListItem onClick={() => this.showAllNannies()} tappable>Show all nannies</ListItem>
              <List
                dataSource={this.props.user.friends}
                renderRow={(friend) => (
                  <ListItem key={friend.FBID} onClick={() => this.filterNanny(friend)} tappable>
                    <img src={friend.photo} className='list-item__thumbnail'></img>
                    <p style={{margin: '10px 10px'}}>{friend.name}</p>
                  </ListItem>
                )}/>
            </Page>
          </SplitterSide>
          <SplitterContent>
            <Page>
              {this.renderToolbar()}
              <DashboardView/>
            </Page>
          </SplitterContent>
        </Splitter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  friendFilter: state.friendFilter
})

const mapDispatchToProps = (dispatch) => ({
  filterNanny: (friendFBid) => dispatch({
    type: 'FILTER_FRIENDS',
    data: friendFBid
  }),
  showAllNannies: () => dispatch({
    type: 'UNFILTER_FRIENDS'
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
