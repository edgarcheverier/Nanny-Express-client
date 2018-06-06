import React, { Component } from 'react';
import './App.css';
import{ connect } from 'react-redux';
import{ fetchList } from './actions';
import NannyItem from './NannyItem';




class App extends Component {
  constructor (props){
    super(props)
    this.FetchTopics()

  }
  FetchTopics = () => {
    fetch(`http://localhost:3000/nanny`)
    .then(response => response.json())
    .then(nannies => this.props.fetchList(nannies))

  }

//   AddEvents = (a, b, c) => {
//
//   fetch(`http://localhost:3000/events`, {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type':'application/json'
//     },
//     method: 'POST',
//     body: JSON.stringify({title: a, date: b, venue: c})
//
//   })
//   .then(this.FetchTopics)
//
// }
//
// DeleteEvents = (id) => {
//   fetch(`http://localhost:3000/events/${id}`, {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type':'application/json'
//     },
//     method: 'DELETE',
//   })
//   .then(this.FetchTopics)
// }

  render() {


    const nannies = this.props.nannies.map((nanny,index) => <NannyItem  key={index} nanny={nanny} > </NannyItem>)




    return (
      <div className="App">
        <header className="App-header">


        </header>

        <div className="App-Body">
          <div className="Nannies">
            <div className="Nanny-List-Main">{nannies}</div>
          </div>


        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({

  nannies: state


});
const mapDispatchToProps = (dispatch) => ({

  fetchList: (nannies) => dispatch(fetchList(nannies)),



});
export default connect(mapStateToProps, mapDispatchToProps)(App);
