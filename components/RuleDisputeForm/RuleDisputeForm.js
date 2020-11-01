import React, { useState, useEffect } from 'react'
import DisputeComments from '../DisputeComments/DisputeComments'

// function App() {
//   // Similar to useState but first arg is key to the value in local storage.
//   const [name, setName] = useLocalStorage('name', 'Bob');
//
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//     </div>
//   );
// }

function parseTime( t ) {
  const d = new Date();
  const time = t.match( /(\d+)(?::(\d\d))?\s*(p?)/ );
  d.setHours( parseInt( time[1]) + (time[3] ? 12 : 0) );
  d.setMinutes( parseInt( time[2]) || 0 );
  return d;
}

const RuleDisputeForm = () => {
  const [expansion, setExpansion] = useState('');
  const [players, setPlayers] = useState(1);
  const [time, setTime] = useState(0);
  const [officialRule, setOfficialRule] = useState('');
  const [interpretation, setInterpretation] = useState('');
  const [rules, setRules] = useState({
    expansion: '',
    players,
    gameplayTime: 0,
    officialRule: 0,
    interpretation: '',
  });

  const [gameDetails, setGameDetails] = useLocalStorage('gameDetails', rules);

  const submitForm = (event) => {
    event.preventDefault();
    setGameDetails(rules);
  };

  useEffect(() => {
    setRules({
      expansion: expansion,
      players: players,
      time: time,
      officialRule: officialRule,
      interpretation: interpretation,
    });
  }, [
    expansion,
    players,
    time,
    officialRule,
    interpretation,
  ]);

  // set rating to 0 by default
  // can add a function that takes an object - onclick listener on comment - fires based on comment ID (for example) 
  // increase/decrease rating - set in store

  return (
    <section>
      <form>
        <label>Expansion Name: </label>
        <input
        type='text'
        name='expansion'
        value={expansion}
        onChange={event => setExpansion(event.target.value)}
        />
        <label>Number of players: </label>
        <input
        type='number'
        name='number'
        value={players}
        onChange={event => setPlayers(parseInt(event.target.value))}
        />
        <label>Gameplay time: </label>
        <input
        type='time'
        name='time'
        onChange={event => setTime(parseTime(event.target.value))}
        />
        <label>Official Rule: </label>
        <input
        type='text'
        name='officialRule'
        onChange={event => setOfficialRule(event.target.value)}
        />
        <label>Interpretation of Rule: </label>
        <input
        type='text'
        name='InterpretationRule'
        onChange={event => setInterpretation(event.target.value)}
        />

        <button onClick={(event) => submitForm(event)}>SUBMIT</button>
      </form>
      <DisputeComments gameDetails={gameDetails} />
    </section>
  )
};

function getLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window ? window.localStorage.getItem(key) : null;
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  return [storedValue, setStoredValue];
}

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once

  const [ storedValue, setStoredValue ] = getLocalStorage('gameDetails');

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
          value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);

      // const parsedValue = JSON.parse(storedValue);
      let itemToSet = [valueToStore];

      if (storedValue) {
        const parsedStoredValue = JSON.parse(window.localStorage.getItem('gameDetails'));

        itemToSet = [...parsedStoredValue, ...itemToSet];
      }
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(itemToSet));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

// const Image = (props) => {
//   const [width, setWidth] = React.useState(0);
//   React.useEffect(() => {
//     setWidth(window.innerWidth);
//   });
//   return <img src={props.src} style={{ width: width }} />;
// };


export default RuleDisputeForm;