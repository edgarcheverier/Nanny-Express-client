import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { fetchList } from './actions'
import Form from './Form'
import List from './List'
import DetailView from './DetailView'
import { BrowserRouter, Route, Link } from 'react-router-dom'


class App extends Component {
  constructor (props) {
    super(props)
    this.fetchNannies()
    this.state = {
      language: false,
      reference: false,
      filteredId: false
    }
  }

  handleClick = (a, b) => {
    this.setState({language: a})
    this.setState({reference: b})

  }

  fetchNannies = () => {
    fetch('http://localhost:3000/nanny')
      .then(response => response.json())
      .then(nannies => this.props.fetchList(nannies))

  }

  detailView = (id) => {
    this.setState({filteredId: id})

  }

  render () {
   console.log(this.props.nannies)

    const nanny = this.props.nannies.filter(nanny => nanny._id === this.state.filteredId).map(nanny => <DetailView  key={nanny._id} nanny={nanny} > </DetailView>)


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
          <p>USER</p>
          {nanny}
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
export default connect(mapStateToProps, mapDispatchToProps)(App)
