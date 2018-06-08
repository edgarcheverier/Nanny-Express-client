import React, { Component } from 'react'
import './Main.css'
import { connect } from 'react-redux'
import { fetchList } from './actions'
import Form from './Form'
import List from './List'
import DetailView from './DetailView'

import { Link, Route } from 'react-router-dom'


class Main extends Component {
  constructor (props) {
    super(props)
    this.fetchNannies()
    this.state = {
      language: false,
      reference: false,
      filteredId: undefined
    }
  }

  handleClick = (a, b) => {
    this.setState({
      language: a,
      reference: b,
      filteredId: undefined
    })
  }

  fetchNannies = () => {
    fetch('http://localhost:3000/nanny')
      .then(response => response.json())
      .then(nannies => this.props.fetchList(nannies))
  }

  detailView = (id) => {
    // this.setState({
    //   filteredId: id
    // })
  }

  renderNannyDetails = () => {
    // if (this.state.filteredId === undefined) return null

    // const nanny = this.props.nannies.find(nanny => {
    //   return nanny._id === this.state.filteredId
    // })

    return (
      <div>
        <p>USER</p>
        <Route path="/browse/:id" component={DetailView}/>
      </div>
    )
  }

  render () {

    return (

      <div className="App">

        <div className="Search">
          <p>SEARCH?</p>
          <Form add={(a, b)=>{this.handleClick(a, b)}}></Form>
        </div>

        <div className="Nannies">
          <List nannies={this.props.nannies} language={this.state.language} reference={this.state.reference} addDetail ={(id)=>{this.detailView(id)}}></List>
        </div>
        <div className="Details">
          {this.renderNannyDetails()}
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  nannies: state
})

const mapDispatchToProps = (dispatch) => ({
  fetchList: (nannies) => dispatch(fetchList(nannies)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
