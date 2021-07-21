import React, {Component} from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date:'',
      time:'',
      number: ''
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value })
  }

  makeRes = event => {
    event.preventDefault();
    const newRes = {
      id: Date.now(),
      ...this.state
    }
    this.props.addRes(newRes)
  }

  render() {
    return (
      <form className='form'>
        <input 
          className='form-name'
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input 
          className='form-date'
          type='text'
          placeholder='Date(mm/dd)'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
        <input 
          className='form-time'
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />
        <input 
          className='form-number'
          type='number'
          placeholder='Number of guests'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />
        <button className='form-button'onClick={event => this.makeRes(event)}>Make a Reservation</button>
      </form>
    )
  }
}

export default Form;