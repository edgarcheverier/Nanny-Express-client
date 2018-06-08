import React, { Component } from 'react'
import './FilterItem.css'
import Moment from 'react-moment'


class FilterItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sign: false,
    }
  }

  handleClickPhoto = (e) => {

    if (this.state.sign === false) {
      this.setState({sign: true})
    } else this.setState({sign: false})
    this.props.addId(this.props.filterNanny._id)

  }

  render () {

    let condition
    let id = this.props.filterNanny._id

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

      <div className ="filteredNannies">
        <img onClick={(e) => this.handleClickPhoto(e)} className="image" src={'http://localhost:3000/' + this.props.filterNanny.Photo +'.jpg'} alt="foto"/>
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
