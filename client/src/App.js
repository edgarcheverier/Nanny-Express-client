import React, { Component } from 'react'
import './App.css'
import Main from './Main'
import Welcome from './Welcome'
import { Route} from 'react-router-dom'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      friends:{}
    }
  }
  UserFriends = (friends) =>{
    this.setState({friends: friends})
  }

  render () {
    const MainPage = (props) =>{
      return (
        <Main friends ={this.state.friends}></Main>
      )
    }
    const WelcomePage = (props)  => {
      return (
        <Welcome add={(e)=>{this.UserFriends(e)}}></Welcome>
      )
    }
console.log(this.state.friends);
    return (
      <div className="App">
        <Route exact path="/" component={WelcomePage}/>
        <Route path="/browse" component={MainPage}/>
      </div>
    )
  }
}

export default App
