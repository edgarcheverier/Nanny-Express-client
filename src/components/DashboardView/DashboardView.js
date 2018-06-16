import React, { Component } from 'react';
import './DashboardView.css';
import { connect } from 'react-redux';

class DashboardView extends Component {
  render() {
    return (
      <div className='DashboardView'>
        <h1>{this.props.user.name}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth
})

export default connect(mapStateToProps)(DashboardView);
