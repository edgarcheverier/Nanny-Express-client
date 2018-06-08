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
    const { language, reference } = this.props

    if (!(language === false && reference === false)) {
      filteredNannies.push(
        this.props.nannies
          .filter(filteredNanny =>{
            return language === 'false' || filteredNanny.Languages.includes(language)
          })
          .filter(filteredNanny =>{
            return reference === 'false' || filteredNanny.References.includes(reference)
          })
          .map((filteredNanny,index) => (
            <FilterItem  key={index} filterNanny={filteredNanny} addId = {(id) => {this.handleClick(id)}}> </FilterItem>)
          )
      )
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
