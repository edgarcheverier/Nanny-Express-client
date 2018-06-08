import React, { Component } from 'react'
import './List.css'
import { connect } from 'react-redux'
import { fetchList } from './actions'
import NannyItem from './NannyItem'
import FilterItem from './FilterItem'


class List extends Component {

  handleClick = (id) => {
    this.props.addDetail(id)

  }

  render () {

    const nannies = this.props.nannies.map((nanny,index) => <NannyItem  key={index} nanny={nanny} > </NannyItem>)
    let filteredNannies= []

    if (this.props.language !== 'false' && this.props.reference !== 'false') { filteredNannies.push(this.props.nannies.filter(nanny => nanny.Languages.includes(this.props.language) && nanny.References.includes(this.props.reference)).map((filteredNanny,index) => <FilterItem  key={index} filterNanny={filteredNanny} > </FilterItem>))}
    else {
      filteredNannies.push(this.props.nannies.filter(filteredNanny =>{ return filteredNanny.Languages.includes(this.props.language)
      }).map((filteredNanny,index) => <FilterItem  key={index} filterNanny={filteredNanny} addId = {(id) => {this.handleClick(id)}}> </FilterItem>))
      filteredNannies.push(this.props.nannies.filter(filteredNanny =>{ return filteredNanny.References.includes(this.props.reference)
      }).map((filteredNanny,index) => <FilterItem  key={index} filterNanny={filteredNanny} addId = {(id) => {this.handleClick(id)}}> </FilterItem>))
    }

    let condition
    if (filteredNannies.length>0) {
      condition = (
        <div>
          {/* <h2 className="Title"></h2> */}
          <div className="FilterNanny">{filteredNannies}</div>
        </div>
      )
    }

    return (

      <div className="Nannies">
        {/* <h2 className="Title">ALL CONTACTS</h2> */}
        <div className="FilterNanny">{condition} </div>
        <div className="Nanny-List">{nannies}</div>

      </div>

    )
  }
}

export default List
