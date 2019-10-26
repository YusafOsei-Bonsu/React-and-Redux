import React from 'react';

// This will be a nested component within the root component (i.e. App.js)
class Ninjas extends React.Component {
  render() {
    return (
      <div className="ninja">
        <div>Name: Yusaf</div>
        <div>Age: 24</div>
        <div>Handsome: Hell yeah</div>
      </div>
    )
  }
}

// Export the 'Ninjas' js file
export default Ninjas
