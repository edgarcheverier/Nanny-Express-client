import React, { Component } from 'react';
import './NannyView.css';
import { Toolbar, ToolbarButton, Icon, Page } from 'react-onsenui';
import { Redirect } from 'react-router';

class NannyView extends Component {
  state = {
    redirectToDashboard: false
  }

  renderToolbar = () =>  {
    return (
      <Toolbar>
        <div className='center'>Your Nannies</div>
        <div className='left'>
          <ToolbarButton>
            <Icon onClick={this.redirectToDashboard} icon='md-arrow-left'></Icon>
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }

  redirectToDashboard = () => {
    this.setState({redirectToDashboard: true});
  }

  renderNannyProperties = () => {
    const properties = Object.entries(this.props.location.state.nanny);

    return properties.map(el => {
      return el[0] === 'name' || el[0] === 'age' ||
      el[0] === 'photo' || el[0] === 'description'
      ? null
      : (<h5 >{el[0]}: {el.slice(1).join(`, `)}</h5>)
    })
  }

  render () {
    if(this.state.redirectToDashboard) return <Redirect to='/dashboard' />
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div className='NannyView'>
          <img className="nannyPhoto" src={this.props.location.state.nanny.photo}></img>
          <h2>{this.props.location.state.nanny.name}, {this.props.location.state.nanny.age}</h2>
          <p class="nannyDescription">{this.props.location.state.nanny.description}</p>
          {this.renderNannyProperties()}
        </div>
      </Page>

    )
  }
}

export default NannyView;
