import React, { Component } from 'react';
import './NannyItem.css'
import Moment from 'react-moment';


class NannyItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      sign: false
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    if(this.state.sign === false) {
      this.setState({sign: true})
    } else this.setState({sign: false});

    }

  render() {

    const lgs = this.props.nanny.Languages[0]
    const arrayLanguages = lgs.name.split(',')
    const languages= arrayLanguages.map((language,index) => <LanguageItem  key={index}language={language} > </LanguageItem>)

    const rfs = this.props.nanny.References[0]
    const arrayReferences = rfs.name.split(',')
    const references= arrayReferences.map((reference,index) => <ReferenceItem  key={index}reference={reference} > </ReferenceItem>)
    let condition;

    if(this.state.sign) {
      condition = (
        <div>
          <p className ="age">Age:{' '}
            <Moment fromNow ago>
              {this.props.nanny.DateBirth}
            </Moment>
            {' '}old
          </p>

          <p className ="nationality">Nationality: {this.props.nanny.Nationality}</p>

          <div className ="languages">
            <div >Languages: </div>
            <div className ="language">{languages}</div>
          </div>
          <p className ="experience">Years of experience in childcare: {this.props.nanny.Experience} years</p>
          <p className ="background">Professional Background: {this.props.nanny.BackGround}</p>
        </div>
      )}


    return (

      <div className ="items">
        <img onClick={(e) => this.handleClick(e)} className="image" src={'http://localhost:3000/' + this.props.nanny.Photo +'.jpg'} alt="foto"/>
        <p className ="name">Name: {this.props.nanny.Name}</p>
        <div className ="references">
          <div >References: </div>
          <div className ="reference"> {references}</div>
        </div>
        <div className="details">
          {condition}
        </div>

      </div>

    );
  }
}


class LanguageItem extends Component {
  render() {
  return (
    <p>
      {this.props.language}
    </p>
 )}
}
class ReferenceItem extends Component {
  render(){
  return (
  <p>
    {this.props.reference}
  </p>
 )}
}

export default NannyItem;
