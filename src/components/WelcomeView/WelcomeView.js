import React, { Component } from 'react';
import './WelcomeView.css';
import FacebookLoginButton from '../FacebookLoginButton';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import FBConfig from '../../config/facebook.config';
import { API } from '../../store/middlewares/apiService'
import { Page, Card } from 'react-onsenui';
class WelcomeView extends Component {

  componentDidMount () {
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
    console.log(resultObject);
    this.props.onFacebookLogin(resultObject.user)

  }

  logInOrRedirect = () => {
    if (this.props.user.name) {
      this.props.fetchUser();

      return <Redirect to='/dashboard' />
    } else {
      return <FacebookLoginButton onLogin={this.onFacebookLogin} />
    }
  }

render() {
  return (
    <Page className='WelcomeView'>
      <div className='WelcomeViewTitle'>Nanny Express</div>
      {/* <img className='WelcomeViewPicture' src={require('../../assets/christinapicture.jpg')}></img> */}
      {this.logInOrRedirect()}
    </Page>
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
  }),

  fetchUser: () => dispatch({
    type: 'FETCH_USER',
    [API]: {
      url: '/user',
      method: 'POST'
    }
  }),

  nanniesToRender: () => dispatch({
    type: 'RENDER_ALL',
    
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeView);
