import React from 'react';
//import './Ninjas.css'

// This will be a nested component within the root component (i.e. App.js)
const Ninjas = ({ninjas, deleteNinja}) => {

  const ninjaList = ninjas.map(ninja => {
  // IF statement approach
    if (ninja.age >= 10) {
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
          <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
          <br/>
        </div>
      )
    } else {
      return null;
    }
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
