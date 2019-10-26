import React from 'react';

// Importing Ninjas
import Ninjas from './Ninjas.js';

// App.js is the root component
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome to my Simple Website, mf! :)</p>
        <Ninjas name="Yusaf" age="24" belt="White"/>
      </div>
    )
  }
}

export default App;
