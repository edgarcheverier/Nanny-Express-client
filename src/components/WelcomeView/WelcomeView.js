import React, { Component } from 'react';
import './WelcomeView.css';
import FacebookLoginButton from '../FacebookLoginButton';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import FBConfig from '../../config/facebook.config';
class WelcomeView extends Component {

  componentDidMount () {
    console.log(FBConfig);
    window.fbAsyncInit = function() {
      window.FB.init(FBConfig);
      window.FB.AppEvents.logPageView();
      const fbInitEvent = new Event('FBObjectReady');
      document.dispatchEvent(fbInitEvent);
    };
    
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

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
