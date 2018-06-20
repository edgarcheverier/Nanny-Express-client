import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { Page, Input, Toolbar, Icon, ToolbarButton, Button } from 'react-onsenui';
import {API} from '../../store/middlewares/apiService';

class NannyFormView extends Component {
  state = {
    redirectToNannyView: false,
    nannyName: '',
    nannyAge: '',
    nannyNacionality: '',
    nannyLaguagesOne: '',
    nannyLaguagesTwo: '',
    nannyLaguages: [],
    nannyPhoto: '',
    nannyEmail: '',
    nannyNumber: '',
    nannyDescription: ''
  }
  redirectToNannyView = () => {
    this.setState({redirectToNannyView: true});
  }

 

  handlerSubmit = () => {
    if (this.props.user) {
      let arr = [this.state.nannyLaguagesOne, this.state.nannyLaguagesTwo]
      this.setState({nannyLaguages: arr})
      let newNanny = {
      name: this.state.nannyName, 
      age: this.state.nannyAge, 
      nationality: this.state.nannyNacionality, 
      languages: this.state.nannyLaguages, 
      photo: this.state.nannyPhoto, 
      email: this.state.nannyEmail, 
      number: this.state.nannyNumber, 
      description: this.state.nannyDescription
      }
      this.props.user.nannies.push(newNanny);
      this.props.updateUser(this.props.user);
      this.setState({redirectToNannyView: true});
    }
  }

  renderToolbar = () =>  {
    return (
      <Toolbar>
        <div className='center'>Your Nannies</div>
        <div className='left'>
          <ToolbarButton>
            <Icon onClick={this.redirectToNannyView} icon='md-arrow-left'></Icon>
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }

  render() {
    if(this.state.redirectToNannyView) return <Redirect to='/nannyedit' /> 
    return (
      <Page renderToolbar={this.renderToolbar}>
        <section style={{textAlign: 'center', marginTop: '25px'}}>
          <p>
            <Input
            //value={this.state.username}
            onChange={(e) => this.setState({nannyName: e.target.value})}
            style={{width: '70%', marginTop: '20px'}}
            modifier='underbar'
            float
            placeholder='Nanny Name' />
          </p>
          <p>
            <Input
            //value={this.state.username}
            onChange={(e) => this.setState({nannyAge: e.target.value})}
            style={{width: '70%', marginTop: '20px'}}
            modifier='underbar'
            float
            placeholder='Age' />
          </p>
          <p>
            <Input
            //value={this.state.username}
            onChange={(e) => this.setState({nannyNacionality: e.target.value})}
            style={{width: '70%', marginTop: '20px'}}
            modifier='underbar'
            float
            placeholder='Nationality' />
          </p>
          <p>
            <Input
            //value={this.state.username}
            onChange={(e) => this.setState({nannyLaguagesOne: e.target.value})} 
            style={{width: '70%', marginTop: '20px'}}
            modifier='underbar'
            float
            placeholder='Native Language' />
          </p>
          <p>
            <Input
            //value={this.state.username}
            onChange={(e) => this.setState({nannyLaguagesTwo: e.target.value})} 
            style={{width: '70%', marginTop: '20px'}}
            modifier='underbar'
            float
            placeholder='Secondary Language' />
          </p>
          <p>
            <Input
            //value={this.state.username}
            onChange={(e) => this.setState({nannyPhoto: e.target.value})}
            style={{width: '70%', marginTop: '20px'}}
            modifier='underbar'
            float
            placeholder='Photo' />
          </p>
          <p>
            <Input
            //value={this.state.username}
            onChange={(e) => this.setState({nannyEmail: e.target.value})}
            style={{width: '70%', marginTop: '20px'}}
            modifier='underbar'
            float
            placeholder='Email' />
          </p>
          <p>
            <Input
            //value={this.state.username}
            onChange={(e) => this.setState({nannyNumber: e.target.value})} 
            style={{width: '70%', marginTop: '20px'}}
            modifier='underbar'
            float
            placeholder='Number' />
          </p>
          <textarea 
          style={{width: '70%', marginTop: '20px'}} 
          className="textarea" 
          rows="3" 
          placeholder="Description" 
          onChange={(e) => this.setState({nannyDescription: e.target.value})}>
          </textarea>
          <Button onClick={this.handlerSubmit} style={{marginTop: '20px', width: '70%', marginBottom: '20px'}} modifier='outline'>Submit</Button>
        </section>
        
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch({
    type: 'FETCH_UPDATE_USER',
    data: user,
    [API]: {
      url: '/user',
      method: 'PUT'
    }
  })
})



export default connect(mapStateToProps, mapDispatchToProps)(NannyFormView);