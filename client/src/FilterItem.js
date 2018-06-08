import React, { Component } from 'react'
import './FilterItem.css'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

class FilterItem extends Component {

  handleClickPhoto = (e) => {
    this.props.addId(this.props.filterNanny._id)
  }

  render () {

    return (
      <Link to={`/browse/${this.props.filterNanny._id}`}>
        <div className ="filteredNannies">
          <img onClick={(e) => this.handleClickPhoto(e)} className="image" src={'http://localhost:3000/' + this.props.filterNanny.Photo +'.jpg'} alt="foto"/>
          <p className ="name">Name: {this.props.filterNanny.Name}</p>
          <p className ="references">References: {this.props.filterNanny.References.join(', ')}</p>

        </div>
      </Link>

    )
  }
}

export default FilterItem
