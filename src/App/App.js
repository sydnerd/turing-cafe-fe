import React, { Component } from 'react';
import './App.css';
import Reservations from '../components/Reservations';

class App extends Component {
  constructor() {
    super();
    this.state ={
      reservations: [],
      error: ''
    }
  }

  componentDidMount() {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({reservations: data}))
      .catch(error => this.setState({error: 'We are experiencing technical difficulties. Please try again.'}))
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations resys={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
