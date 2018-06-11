import React, { Component } from 'react'
import './DetailView.css'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { Image, Button, Table } from 'react-bootstrap'


class DetailView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sign: false
    }
  }

    handleClick = () => {
      if (this.state.sign === false) {
        this.setState({sign: true})
      } else this.setState({sign: false})

    }

    render () {
      let condition

      if (this.state.sign) {
        condition = (
          <table class="table table-bordered">
            <tr>
              <th>Affection</th>
              <td> {this.props.nanny.Ranking.Affection}</td>
            </tr>
            <tr>
              <th>Attendance</th>
              <td> {this.props.nanny.Ranking.Attendance}</td>
            </tr>
            <tr>
              <th>Punctuality</th>
              <td> {this.props.nanny.Ranking.Punctuality}</td>
            </tr>
          </table>
        )}

      if (!this.props.nanny) return null

      const ranking = ((this.props.nanny.Ranking.Punctuality + this.props.nanny.Ranking.Attendance + this.props.nanny.Ranking.Affection )/3).toFixed(2)

      return (

        <div className ="items">
          <Image className="imageDetail" src={'http://localhost:3000/' + this.props.nanny.Photo +'.jpg'} alt="foto" rounded/>
          <p className ="name">Name: {this.props.nanny.Name}</p>
          <Button onClick={()=> this.handleClick()}>Ranking</Button>
          <p className ="ranking"> {ranking}</p>
          <div className ="ranking"> {condition}</div>
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

const mapStateToProps = (state, props) => ({
  nanny: state.find(nanny => nanny._id === props.match.params.id),

})

export default connect(mapStateToProps)(DetailView)
