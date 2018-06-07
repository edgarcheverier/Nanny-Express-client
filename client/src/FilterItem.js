import React, { Component } from 'react'
import './NannyItem.css'
import Moment from 'react-moment'


class FilterItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sign: false
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    if (this.state.sign === false) {
      this.setState({sign: true})
    } else this.setState({sign: false})

  }

  render () {

    let condition

    if (this.state.sign) {
      condition = (
        <div>
          <p className ="age">Age:{' '}
            <Moment fromNow ago>
              {this.props.filterNanny.DateBirth}
            </Moment>
            {' '}old
          </p>
          <p className ="nationality">Nationality: {this.props.filterNanny.Nationality}</p>
          <p className ="languages">Languages: {this.props.filterNanny.Languages.join(', ')} </p>
          <p className ="experience">Years of experience in childcare: {this.props.filterNanny.Experience} years</p>
          <p className ="background">Professional Background: {this.props.filterNanny.BackGround}</p>
        </div>
      )}

    return (

      <div className ="items">
        <img onClick={(e) => this.handleClick(e)} className="image" src={'http://localhost:3000/' + this.props.filterNanny.Photo +'.jpg'} alt="foto"/>
        <p className ="name">Name: {this.props.filterNanny.Name}</p>
        <p className ="references">References: {this.props.filterNanny.References.join(', ')}</p>
        <div className="details">
          {condition}
        </div>

      </div>

    )
  }
}


export default FilterItem
