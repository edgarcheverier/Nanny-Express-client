import React, { Component } from 'react'
import './Search.css'
import { Redirect} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value1: 'false',
      value2: 'false',
      redirect: false,
      key: this.props.key
    }
    this.handleLanguage = this.handleLanguage.bind(this)
    this.handleReference = this.handleReference.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleLanguage (event) {
    this.setState({value1: event.target.value})
  }

  handleReference (event) {
    this.setState({value2: event.target.value})
  }

  handleSubmit ( event) {
    event.preventDefault()
    this.setState({ redirect: (
      <Redirect to={`/browse/${this.state.value2}/${this.state.value1}`} > </Redirect>

    )})
  }

  render () {

    let condition
    if (this.props.friends) {
      condition = (
        <select className="Options" value={this.state.value2} onChange={this.handleReference}>
          <option value='false'>Friends...</option>
          {
            this.props.friends.map((friend, index) => {
              return (<option key={index} value={friend}>{friend}</option>)
            })
          }
        </select>
      )
    }

    return (
      <div >
        <div className="Redirect">{this.state.redirect} </div>
        <form className = "Form" onSubmit ={this.handleSubmit}>
          <label className="FriendSelection" >
            Select one friend:
            {condition}
          </label>

          <label className="RankingSelection">
            Friends evaluation:
            <select className="Options" value={this.state.value1} onChange={this.handleLanguage}>
              <option value='false'>Grades...</option>
              <option value="4.5">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</option>
              <option value="4"> ⭐️ ⭐️ ⭐️ ⭐️</option>
              <option value="3.5">⭐️ ⭐️ ⭐️</option>
            </select>
          </label>

          <Button className ="ButtonSearch" bsSize='large' type= 'submit' >SEARCH</Button>

          {/* </FormGroup> */}
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  nannies: state.nannies,
  user: state.user
})

export default connect(mapStateToProps)(Search)
