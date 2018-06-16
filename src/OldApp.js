import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLoginButton from './components/FacebookLoginButton';

class App extends Component {

  state = {
    username: null
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
    } else {
      alert('Facebook login error');
    }
  }

  onFacebookLogout = () => {
    console.log(document.cookie);

    const delete_cookie = function(name) {
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    delete_cookie('fbsr_818153751905754')


  }

  render() {
    const { username } = this.state;

    return (
      <div className="App">
        <div className="App-intro">
          <div>
            <p>Click on one of any button below to login</p>
            <FacebookLoginButton onLogin={this.onFacebookLogin}>
              <button>Facebook</button>
            </FacebookLoginButton>
          </div>
          {username &&
            <p>Welcome back, {username}</p>
          }
        </div>
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react'
// import './App.css'
// import Main from './Main'
// import Welcome from './Welcome'
// import { Route} from 'react-router-dom'
//
// class App extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       friends:{}
//     }
//   }
//   UserFriends = (friends) =>{
//     this.setState({friends: friends})
//   }
//
//   render () {
//     const MainPage = (props) =>{
//       return (
//         <Main friends ={this.state.friends}></Main>
//       )
//     }
//     const WelcomePage = (props)  => {
//       return (
//         <Welcome add={(e)=>{this.UserFriends(e)}}></Welcome>
//       )
//     }
// console.log(this.state.friends);
//     return (
//       <div className="App">
//         <Route exact path="/" component={WelcomePage}/>
//         <Route path="/browse" component={MainPage}/>
//       </div>
//     )
//   }
// }
//
// export default App
