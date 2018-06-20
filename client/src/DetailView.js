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
          <Table className="Table" bordered  >
            <tbody>
              <tr>
                <th>KID FRIENDLY</th>
                <td> {this.props.nanny.Ranking.Affection}</td>
              </tr>
              <tr>
                <th>RELIABILITY</th>
                <td> {this.props.nanny.Ranking.Attendance}</td>
              </tr>
              <tr>
                <th>PUNCTUALITY</th>
                <td> {this.props.nanny.Ranking.Punctuality}</td>
              </tr>
            </tbody>
          </Table>
        )}

      if (!this.props.nanny) return null

      const ranking = ((this.props.nanny.Ranking.Punctuality + this.props.nanny.Ranking.Attendance + this.props.nanny.Ranking.Affection )/3).toFixed(2)

      return (
        <div className="DetailView">
          <div className ="NannyDetails">
            <Image className="ImageDetail" src={'http://localhost:3000/' + this.props.nanny.Photo +'.jpg'} alt="foto" rounded/>
            <p className ="Name">Name: {this.props.nanny.Name}</p>
            <div className ="Ranking">
              <Button className ="ButtonRanking"  onClick={()=> this.handleClick()}>Rating</Button>
              <p className="RatingText"> {ranking}</p>
            </div>
            <div > {condition}</div>
            <p className ="Age">Age:{' '}
              <Moment fromNow ago>
                {this.props.nanny.DateBirth}
              </Moment>
              {' '}old
            </p>
            <p className ="Nationality">Nationality: {this.props.nanny.Nationality}</p>
            <p className ="Languages">Languages: {this.props.nanny.Languages.join(', ')} </p>
            <p className ="BackGround">Professional Background: {this.props.nanny.BackGround}</p>
            <Button className ="ButtonContact" bsSize='large' >Contact!</Button>
          </div>
        </div>

      )
    }
}

const mapStateToProps = (state, props) => ({
  nanny: state.nannies.find(nanny => nanny._id === props.match.params.id),

})

export default connect(mapStateToProps)(DetailView)
