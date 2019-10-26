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

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome to my Simple Website, mf! :)</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja/>
      </div>
    )
  }
}

export default App;
