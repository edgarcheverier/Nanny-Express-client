import React, { Component } from 'react'
import './Main.css'
import { connect } from 'react-redux'
import { fetchList } from './actions'
import Search from './Search'
import List from './List'
import FilteredList from './FilteredList'
import DetailView from './DetailView'

import { Link, Route } from 'react-router-dom'


class Main extends Component {
  constructor (props) {
    super(props)
    this.fetchNannies(),
    this.state = {
      friends: this.props.friends
    }
    // this.state = {
    //   language: false,
    //   reference: false,
    //   filteredId: undefined
    // }
  }

  // handleClick = (a, b) => {
  //   this.setState({
  //     language: a,
  //     reference: b,
  //     filteredId: undefined
  //   })
  // }

  fetchNannies = () => {
    fetch('http://localhost:3000/nannies')
      .then(response => response.json())
      .then(nannies => this.props.fetchList(nannies))
  }

  renderNannyDetails = () => {

    return (
      <div>
        <Route path="/browse/:reference/:ranking/:id" component={DetailView}/>
      </div>
    )
  }
  renderFilteredNanny = () => {

    return (
      <div>
        <p>USER</p>
        <Route path="/browse/:reference/:ranking" component={FilteredList}/>
      </div>
    )
  }

  render () {

    return (

      <div className="App">

        <div className="Search">
          <p>SEARCH?</p>
          <Search friends={this.props.friends.user}/*add={(a, b)=>{this.handleClick(a, b)}}*/></Search>
        </div>

        <div className="Nannies">
          <div className="Details">
            {this.renderFilteredNanny()}
          </div>
          <List ></List>
        </div>
        <div className="Details">
          {this.renderNannyDetails()}
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  nannies: state.nannies,
  user: state.userData
})

const mapDispatchToProps = (dispatch) => ({
  fetchList: (nannies) => dispatch(fetchList(nannies)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
