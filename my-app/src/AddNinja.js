// Importing React
import React from 'react'

class AddNinja extends React.Component {
  state = {
    name: null,
    age: null,
    belt: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    // Prevent default refresh
    e.preventDefault();
    // An object containing the name, age and belt of the new ninja will be printed in the console
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={this.handleChange}/>
          <br/>
          <label htmlFor="name">Age: </label>
          <input type="text" id="age" onChange={this.handleChange}/>
          <br/>
          <label htmlFor="name">Belt: </label>
          <input type="text" id="belt" onChange={this.handleChange}/>
          <br/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

// Export AddNinja.js
export default AddNinja
