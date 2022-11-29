import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import Character from './components/Character'

const App = () => {
  const [people, setPeople] = useState([]);
  // const [userData, setUserData] = useState({name: 'Aaron', birth_year: 1998});

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
 
  axios.get('https://swapi.dev/api/people/')
  .then((res) => {
setPeople(res.data)
})
  .catch((err) => console.log('Error Message FAILED', err));
}, []);
  
return (
    <div>  
     {people.map(allpeople => {
      return <Character firstName = {allpeople.name}  birthYear= {allpeople.birth_year} />
     })}
    </div>
  )
}

export default App;

// 'https://swapi.dev/api/people/`
//  birth_year
 // name