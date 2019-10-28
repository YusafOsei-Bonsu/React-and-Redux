// Importing React
import React from 'react'

class AddNinja extends React.Component {
  state = {name: null, age: null, belt: null}

  handleChange = (e) => {
    this.setState({
      // Target: The element we're currently on
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    // Prevent default refresh
    e.preventDefault();
    // Adding a ninja into the list upon pressing the Submit button
    this.props.addNinja(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" onChange={this.handleChange}/>
          <br/>
          <label htmlFor="name">Age: </label>
          <input id="age" type="text" onChange={this.handleChange}/>
          <br/>
          <label htmlFor="name">Belt: </label>
          <input id="belt" type="text" onChange={this.handleChange}/>
          <br/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

// Export AddNinja.js
export default AddNinja
