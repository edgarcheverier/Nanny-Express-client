import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { fetchList } from './actions'
import NannyItem from './NannyItem'
import FilterItem from './FilterItem'
import Form from './Form'


class App extends Component {
  constructor (props) {
    super(props)
    this.fetchNannies()
    this.state = {
      language: false,
      reference: false,
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

  render () {


    const nannies = this.props.nannies.map((nanny,index) => <NannyItem  key={index} nanny={nanny} > </NannyItem>)

    let filteredNannies= []

    if (this.state.language !== 'false' && this.state.reference !== 'false') { filteredNannies.push(this.props.nannies.filter(nanny => nanny.Languages.includes(this.state.language) && nanny.References.includes(this.state.reference)).map((filteredNanny,index) => <FilterItem  key={index} filterNanny={filteredNanny} > </FilterItem>))}
    else {
      console.log(this.state.language)
      filteredNannies.push(this.props.nannies.filter(filteredNanny =>{ return filteredNanny.Languages.includes(this.state.language)
      }).map((filteredNanny,index) => <FilterItem  key={index} filterNanny={filteredNanny} > </FilterItem>))
      filteredNannies.push(this.props.nannies.filter(filteredNanny =>{ return filteredNanny.References.includes(this.state.reference)
      }).map((filteredNanny,index) => <FilterItem  key={index} filterNanny={filteredNanny} > </FilterItem>))
    }

    let condition
    if (filteredNannies.length>0) {
      condition = (
        <div>
          <h2 className="Title">FILTER</h2>
          <div className="FilterNanny">{filteredNannies}</div>
        </div>
      )
    }


    return (

      <div className="App">
        <header className="App-header">


        </header>
        {/* <input type="text" ref={node => input.push(node)}/>
        <input type="text" ref={node => input.push(node)}/>
        <button onClick={(e)=>{this.handleClick(input[0].value, input[1].value);input=[]}}>Search</button> */}

        <div className="Create-Event">
          <p>Search</p>
          <Form add={(a, b)=>{this.handleClick(a, b)}}></Form>

        </div>

        <div className="App-Body">
          <div className="Body">
            {condition}
          </div>
          <div className="Nannies">
            <div className="Nanny-List-Main">{nannies}</div>
          </div>


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
