import React, { Component } from 'react';
import './WelcomeView.css';
import FacebookLoginButton from '../FacebookLoginButton';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class WelcomeView extends Component {

  onFacebookLogin = (loginStatus, resultObject) => {
    this.props.onFacebookLogin(resultObject.user)
  }

  logInOrRedirect = () => {
    if (this.props.user.name) {
      return <Redirect to='/dashboard' />
    } else {
      return <FacebookLoginButton onLogin={this.onFacebookLogin} />
    }
  }

render() {
  return (
    <div className='WelcomeView'>
      {this.logInOrRedirect()}
    </div>
  )
}
}

const mapStateToProps = (state) => ({
  user: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onFacebookLogin: (resultObject) => dispatch({
    type: 'STORE_USER',
    data: resultObject
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeView);
