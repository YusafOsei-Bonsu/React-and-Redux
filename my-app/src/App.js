// Importing React
import React from 'react';
// Importing Ninjas.js
import Ninjas from './Ninjas.js';
// Importing AddNinja.js
import AddNinja from './AddNinja.js'

// App.js is the root component
class App extends React.Component {
  state = {
    ninjas: [
      {name: 'Yusaf', age: 24, belt: 'White', id: 1},
      {name: 'Yasser', age: 26, belt: 'Super Black', id: 2},
      {name: 'Ashish', age: 24, belt: 'Brown', id: 3}
    ]
  }

  // Adding ninjas into the above state
  addNinja = (ninja) => {
    ninja.id = Math.random();
    // Making a copy of the original ninjas and appending the new ninja
    // It's bad practice to alter the original list directly (using .push)
    let ninjasCopy = [...this.state.ninjas, ninja];
    // New ninja is presented on html page
    this.setState({
      ninjas: ninjasCopy
    })
  }

  deleteNinja = (id) => {
    // if 'ninja.id !== id' is true, the ninja remains.
    // Otherwise, if it evaluates to false, the ninja is deleted.
    let ninjasCopy = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    })

    this.setState({
      ninjas: ninjasCopy
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome to my Simple Website, mf! :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja}/>
      </div>
    )
  }
}

export default App;
