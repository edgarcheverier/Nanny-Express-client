import React, { Component } from 'react'
import './FilterItem.css'
import { Link } from 'react-router-dom'

class FilterItem extends Component {

  render () {

    return (
      <Link to={`/browse/${this.props.currReference}/${this.props.currLanguage}/${this.props.filterNanny._id}`}>
        <div className ="filteredNannies">
          <img className="image" src={'http://localhost:3000/' + this.props.filterNanny.Photo +'.jpg'} alt="foto"/>
          <p className ="name">Name: {this.props.filterNanny.Name}</p>
          <p className ="references">References: {this.props.filterNanny.References.join(', ')}</p>
        </div>
      </Link>

    )
  }
}

export default FilterItem
