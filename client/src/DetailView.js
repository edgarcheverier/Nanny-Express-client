import React, { Component } from 'react'
import './DetailView.css'
import Moment from 'react-moment'


class DetailView extends Component {

  render () {

    return (

      <div className ="items">
        <img onClick={(e) => this.handleClick(e)} className="image" src={'http://localhost:3000/' + this.props.nanny.Photo +'.jpg'} alt="foto"/>
        <p className ="name">Name: {this.props.nanny.Name}</p>
        <p className ="references">References: {this.props.nanny.References.join(', ')}</p>
        <p className ="age">Age:{' '}
          <Moment fromNow ago>
            {this.props.nanny.DateBirth}
          </Moment>
          {' '}old
        </p>
        <p className ="references">References: {this.props.nanny.References.join(', ')}</p>
        <p className ="nationality">Nationality: {this.props.nanny.Nationality}</p>
        <p className ="languages">Languages: {this.props.nanny.Languages.join(', ')} </p>
        <p className ="experience">Years of experience in childcare: {this.props.nanny.Experience} years</p>
        <p className ="background">Professional Background: {this.props.nanny.BackGround}</p>

      </div>

    )
  }
}


export default DetailView
