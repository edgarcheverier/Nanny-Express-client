import React, { Component } from 'react'
import './FilteredList.css'
import { connect } from 'react-redux'
import NannyItem from './NannyItem'
import FilterItem from './FilterItem'


class FilteredList extends Component {

  render () {

    let filteredNannies= []
    const { language, reference } = this.props.match.params

    if (!(language === 'false' && reference === 'false')) {
      filteredNannies.push(
        this.props.nannies
          .filter(filteredNanny => language === 'false' || filteredNanny.Languages.includes(language))
          .filter(filteredNanny => reference === 'false' || filteredNanny.References.includes(reference))
          .map((filteredNanny,index) => (
            <FilterItem  key={index} currReference={this.props.match.params.reference} currLanguage={this.props.match.params.language} filterNanny={filteredNanny}> </FilterItem>)
          )
      )
    }

    let condition
    if (filteredNannies.length>0) {
      condition = (
        <div>
          {filteredNannies}
        </div>
      )
    }

    return (

      <div className="Nannies">
        {/* <h2 className="Title">ALL CONTACTS</h2> */}
        <div className="FilterNanny">  {condition} </div>
      </div>

    )
  }
}

const mapStateToProps = (state, props) => ({
  nannies: state,
})
export default connect(mapStateToProps)(FilteredList)
