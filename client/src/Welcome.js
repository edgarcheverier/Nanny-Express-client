import React, { Component } from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class Welcome extends Component {


  render () {
    return (
      <div>
        <div>
          <p className = 'Welcome'>Welcome to Nanny Express!</p>
        </div>
        <Link to={'/browse'}>
          <Button bsSize="large" bsStyle="primary" block>Enter</Button>
        </Link>
      </div>
    )
  }
}

export default Welcome
