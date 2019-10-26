import React from 'react';

// This will be a nested component within the root component (i.e. App.js)
const Ninjas = ({ninjas}) => {
  // Every ninja will be stored in the list
  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <br/>
      </div>
    )
  })

  return (
    // Printing each ninja
    <div className="ninja-list">
      {ninjaList}
    </div>
  )
}

// Export the 'Ninjas' js file
export default Ninjas
