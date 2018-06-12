import React, { Component } from 'react'
import './App.css'
import Main from './Main'
import Welcome from './Welcome'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import DetailView from './DetailView'
import FilteredList from './FilteredList'
import { connect } from 'react-redux'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      friends:[]
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
    console.log(this.state.friends.user);
    return (
      <div>
        <Route exact path="/" component={WelcomePage}/>
        <Route path="/browse" component={MainPage}/>
      </div>
    )
  }
}



export default App
