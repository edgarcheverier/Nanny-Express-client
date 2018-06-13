import React, { Component } from 'react'
import './NannyItem.css'
import { Image } from 'react-bootstrap'


class NannyItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sign: false
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    if (this.state.sign === false) {
      this.setState({sign: true})
    } else this.setState({sign: false})

  }

  render () {

    let condition

    if (this.state.sign) {
      condition = (
        <div>
          <p className ="name">Name: {this.props.nanny.Name}</p>
          <p className ="references">Worked with: {this.props.nanny.References.join(', ')}</p>
        </div>
      )}

    return (

      <div className ="Nanny">
        <Image onClick={(e) => this.handleClick(e)} className="imageNanny" src={'http://localhost:3000/' + this.props.nanny.Photo +'.jpg'} alt="photo" rounded />
    
        <div className="details">
          {condition}
        </div>

      </div>

    )
  }
}


export default NannyItem
