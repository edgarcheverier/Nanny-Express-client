import React, { Component } from 'react'
import './Main.css'
import { connect } from 'react-redux'
import { fetchList } from './actions'
import Search from './Search'
import List from './List'
import FilteredList from './FilteredList'
import DetailView from './DetailView'
import { Image } from 'react-bootstrap'
import { Route } from 'react-router-dom'


class Main extends Component {
  constructor (props) {
    super(props)
    this.fetchNannies()
  }

  fetchNannies = () => {
    fetch('http://localhost:3000/nannies')
      .then(response => response.json())
      .then(nannies => this.props.fetchList(nannies))
  }

  renderNannyDetails = () => {
    return (
      <div>
        <div className="User">
          <p className="UserName">Hello Cristina!</p>
          <Image className="PhotoUser" src={'http://localhost:3000/19.jpg'} alt="foto" circle/>
        </div>
        <div>
          <Route path="/browse/:reference/:ranking/:id" component={DetailView}/>
        </div>
      </div>
    )
  }

  renderFilteredNanny = () => {
    return (


      <div>
        <Route path="/browse/:reference/:ranking" component={FilteredList}/>
      </div>

    )
  }

  render () {

    return (

      <div className="MainPage">

        <div className="Search">

          <Search friends={this.props.friends.user}></Search>
        </div>

        <div className="NanniesLists">
          <div className="FilteredList">
            {this.renderFilteredNanny()}
          </div>
          <div className="CompletList">
            <List ></List>
          </div>
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
})

const mapDispatchToProps = (dispatch) => ({
  fetchList: (nannies) => dispatch(fetchList(nannies)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
