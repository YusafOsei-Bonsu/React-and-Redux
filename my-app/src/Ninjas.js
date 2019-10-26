import React from 'react';

// This will be a nested component within the root component (i.e. App.js)
class Ninjas extends React.Component {
  render() {
    // Prints the properties of the Ninjas component (in App.js)
    // console.log(this.props);
    const {name, age, belt} = this.props;
    return (
      <div className="ninja">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Handsome: {belt}</div>
      </div>
    )
  }
}

// Export the 'Ninjas' js file
export default Ninjas
