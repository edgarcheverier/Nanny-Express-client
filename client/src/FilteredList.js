import React, { Component } from 'react'
import './FilteredList.css'
import { connect } from 'react-redux'
import FilterItem from './FilterItem'


class FilteredList extends Component {

  render () {


    let filteredNannies= []

    const { reference, ranking } = this.props.match.params

    if (!(ranking === 'false' && reference === 'false')) {
      filteredNannies.push(
        this.props.nannies
          .filter(filteredNanny => ranking === 'false' || ((filteredNanny.Ranking.Punctuality + filteredNanny.Ranking.Attendance + filteredNanny.Ranking.Affection )/3) >= ranking)
          .filter(filteredNanny => reference === 'false' || filteredNanny.References.includes(reference))
          .sort((a, b) => ((b.Ranking.Punctuality + b.Ranking.Attendance + b.Ranking.Affection)/3) - ((a.Ranking.Punctuality + a.Ranking.Attendance + a.Ranking.Affection)/3))
          .map((filteredNanny,index) => (
            <FilterItem  className="FilteredNanny" key={index} currReference={this.props.match.params.reference} currRanking={this.props.match.params.ranking} filterNanny={filteredNanny} > </FilterItem>)
          )
      )
    } else if (ranking === 'false' && reference === 'false') {
      filteredNannies.push(this.props.nannies.map((filteredNanny,index) => <FilterItem  className="FilteredNanny" key={index} currReference={this.props.match.params.reference} currRanking={this.props.match.params.ranking} filterNanny={filteredNanny} > </FilterItem>))
    }

    let condition
    if (filteredNannies.length>0) {
      condition = (
        <div className="FilteredView">
          <h2 className="FilterTitle">NANNIES</h2>
          <div className="FilteredNannies">
            {filteredNannies}
          </div>
        </div>
      )
    }

    return (
      <div>  {condition} </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  nannies: state.nannies,

})
export default connect(mapStateToProps)(FilteredList)
