import React, { Component } from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom'
import { Button, Image, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'


class Welcome extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  validateForm () {
    return this.state.email.length > 0 && this.state.password.length > 0
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render () {
    return (
      <div className="firstPage">
        <div classname="welcomePhoto">
          <Image src={'http://localhost:3000/1.jpg'} alt="photo" rounded />
        </div>
        <div className = 'textFirstPage'>
          <div className = "welcome">
            <p >Welcome to Nanny Express!</p>
          </div>
          <div>
            <form className = 'loginForm' onSubmit={this.handleSubmit}>
              <FormGroup controlId="email" bsSize="large">
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
              <Link to={'/browse'}>
                <Button
                  block
                  bsSize="large"
                  disabled={!this.validateForm()}
                  type="submit"
                >
                  Login
                </Button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
