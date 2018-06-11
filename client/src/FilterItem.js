import React, { Component } from 'react'
import './FilterItem.css'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

class FilterItem extends Component {

  render () {

    return (
      <Link to={`/browse/${this.props.currReference}/${this.props.currRanking}/${this.props.filterNanny._id}`}>
        <div className ="filteredNanny">
          <Image className="imageFilteredNanny" src={'http://localhost:3000/' + this.props.filterNanny.Photo +'.jpg'} alt="foto" rounded/>
          <p className ="name">Name: {this.props.filterNanny.Name}</p>
          <p className ="references">References: {this.props.filterNanny.References.join(', ')}</p>
        </div>
      </Link>

    )
  }
}

export default FilterItem
