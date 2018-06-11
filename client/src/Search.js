import React, { Component } from 'react'
import './Search.css'
import { Redirect} from 'react-router-dom'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { connect } from 'react-redux'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value1: 'false',
      value2: 'false',
      redirect: false,
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
  //  this.props.add(this.state.value1, this.state.value2)
    this.setState({ redirect: (
      <Redirect to={`/browse/${this.state.value2}/${this.state.value1}`} > </Redirect>

    )})
  }

  render () {

    // let optionReference =[]
    // let x = this.props.nannies.forEach(nanny => nanny.References.filter(reference => optionReference.push(reference)))
    // console.log(optionReference);
    return (
      <div>
        <div className="Redirect">{this.state.redirect} </div>
        <form className = 'form' onSubmit ={this.handleSubmit}>
          {/* <FormGroup> */}
          <label>
            Reference:
            <select value={this.state.value2} onChange={this.handleReference}>
              <option value='false'>Select...</option>
              <option value="Nikol">Nikol</option>
              <option value="Suki">Suki</option>
              <option value="Maria">Maria</option>
              <option value="Clo">Clo</option>
              <option value="Stuart">Stuart</option>
            </select>
          </label>          

          <input  type= 'submit' value="Search"  />

          <label>
            Ranking:
            <select value={this.state.value1} onChange={this.handleLanguage}>
              <option value='false'>Select...</option>
              <option value="5">5</option>
              <option value="4">more than 4</option>
              <option value="3">more than 3 </option>
            </select>
          </label>

          {/* </FormGroup> */}
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  nannies: state,
})

export default connect(mapStateToProps)(Search)
