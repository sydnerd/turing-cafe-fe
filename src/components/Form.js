import React, {Component} from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name = '',
      date = '',
      time = '',
      number = 0
    }
  }

  render() {
    return (
      <form>
        <input 
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
        />
      </form>
    )
  }
}

export default Form;