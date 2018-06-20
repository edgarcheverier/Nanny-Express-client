import React, { Component } from 'react'
import './Welcome.css'
import { connect } from 'react-redux'
import { fetchUser } from './actions'
import { Redirect } from 'react-router-dom'
import { Button, Image, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'


class Welcome extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      redirect: false,

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

  handleSubmit =  event => {
    event.preventDefault()
    this.fetchUser()
  }

  fetchUser = () => {
    fetch('http://localhost:3000/signin', {
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + this.state.email +':'+this.state.password
      },
      method: 'GET'
    })
      .then(response => response.json())
      .then(user => this.props.fetchUser(user.References))
      .then(friends => this.props.add(friends))
      .then( this.setState({ redirect:
          <Redirect to={'/browse'}> </Redirect>
      }))
  }


  render () {

    return (
      <div className="FirstPage">
        <div className="Redirect">{this.state.redirect} </div>
        <div>
          <Image  className="WelcomePhoto"src={'http://localhost:3000/1.jpg'} alt="photo" rounded />
        </div>
        <div className = 'TextFirstPage'>
          <div className = "Welcome">
            <p >Welcome to Nanny Express!</p>
          </div>
          <div>
            <form className = 'LoginForm' onSubmit={this.handleSubmit}>
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

              <Button className="LogInButton"
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
              >
                  Login
              </Button>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user) => dispatch(fetchUser(user)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
