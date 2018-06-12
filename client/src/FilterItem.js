import React, { Component } from 'react'
import './FilterItem.css'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

class FilterItem extends Component {

  render () {

    return (
      <div className ="filteredNanny">
        <Link to={`/browse/${this.props.currReference}/${this.props.currRanking}/${this.props.filterNanny._id}`}>

          <Image className="imageFilteredNanny" src={'http://localhost:3000/' + this.props.filterNanny.Photo +'.jpg'} alt="foto" rounded/>
        </Link>
        <p className ="name">Name: {this.props.filterNanny.Name}</p>
      </div>


    )
  }
}

export default FilterItem
