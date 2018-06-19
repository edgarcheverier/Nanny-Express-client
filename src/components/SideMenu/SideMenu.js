import React, { Component } from 'react';
import { Toolbar, ToolbarButton, Icon, Splitter, SplitterSide, SplitterContent,
  Page, List, ListItem, Button } from 'react-onsenui';
import { connect } from 'react-redux';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

const mockNames = ['Lindon Sable','Deodatus Jaynie','Phoibe Thersa','Mahthildis Iara'];

class SideMenu extends Component {
 constructor (props) {
   super(props);
   this.state = {
     isOpen: false
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
    this.hide();
  }

  filterNanny = (friend) => {
    this.props.filterNanny(friend);
    this.hide();
  }

  showAllNannies = () => {
    this.props.showAllNannies();
    this.hide();
  }

  render() {
    return (
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
            {this.props.user.photo && <img src={this.props.user.photo}></img>}
            {this.props.user.name && <h3>{this.props.user.name}</h3>}
            <Button style={{margin: '6px'}} onClick={this.handleClickYourNannies}
            ><i className="zmdi zmdi-edit"></i> Your nannies</Button>
            <ListItem onClick={() => this.showAllNannies()} tappable>Show all nannies</ListItem>
            <List
              dataSource={this.props.friends || mockNames}
              renderRow={(friend) => (
                <ListItem key={friend} FBID={friend.FBID} onClick={() => this.filterNanny(friend.FBID)} tappable>{friend}</ListItem>
              )}/>
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Page renderToolbar={this.renderToolbar}>
            <section style={{margin: '16px'}}>
            </section>
          </Page>
        </SplitterContent>
      </Splitter>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  friends: state.friends
})

const mapDispatchToProps = (dispatch) => ({
  filterNanny: (friend) => dispatch({
    type: 'FILTER_NANNY',
    data: friend
  }),
  showAllNannies: () => dispatch({
    type: 'SHOW_ALL_NANNIES'
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
