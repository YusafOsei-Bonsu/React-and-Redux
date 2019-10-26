import React from 'react';

// This will be a nested component within the root component (i.e. App.js)
const Ninjas = ({ninjas}) => {

  const ninjaList = ninjas.map(ninja => {
  // IF statement approach
    if (ninja.age >= 10) {
      return (
        <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <br/>
        </div>
      )
    } else {
      return null;
    }
  })

  // Ternary operator approach
  // const ninjaList = ninjas.map(ninja => {
  //   return ninja.age > 20 ? (
  //     <div className="ninja" key={ninja.id}>
  //       <div>Name: {ninja.name}</div>
  //       <div>Age: {ninja.age}</div>
  //       <div>Belt: {ninja.belt}</div>
  //       <br/>
  //     </div>
  //   ) : null;
  // })

  return (
    // Printing each ninja
    <div className="ninja-list">
      {ninjaList}
    </div>
  )
}

// Export the 'Ninjas' js file
export default Ninjas
