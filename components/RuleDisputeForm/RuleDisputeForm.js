import React, { useState, useEffect } from 'react'
import DisputeComments from '../DisputeComments/DisputeComments'

const RuleDisputeForm = () => {
  const [expansion, setExpansion] = useState('');
  const [players, setPlayers] = useState(1);
  const [time, setTime] = useState(0);
  const [officialRule, setOfficialRule] = useState('');
  const [interpretation, setInterpretation] = useState('');
  const [singleDispute, setSingleDispute] = useState({
    expansion: '',
    players,
    gameplayTime: 0,
    officialRule: 0,
    interpretation: '',
  });

  const [allDisputes, setAllDisputes] = useLocalStorage('allDisputes', []);


  const submitForm = (event) => {
    event.preventDefault();
    // setAllDisputes(previousValue => {
    //   console.log(previousValue)
    //   [...previousValue, singleDispute]
    // });
    setAllDisputes(singleDispute)
    // console.log("what is useLocalStorage eval", allDisputes)
  };

  useEffect(() => {
    setSingleDispute({
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
        type='number'
        name='time'
        onChange={event => setTime(parseInt(event.target.value))}
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
      <DisputeComments allDisputes={allDisputes} />
    </section>
  )
};

//because render on server - need the window check with ternary for example
function useGetLocalStorage(key, initialValue) {

  //defining array of two values using useState
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

function useLocalStorage(key) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once

  //destructuring - just abstracting from useGetLocalStorage itself
  const [ storedValue, setStoredValue ] = useGetLocalStorage('allDisputes');

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    console.log('value', value)
    try {
      // Allow value to be a function so we have same API as useState
      // console.log('value,', value, typeof value)
      //check isntanceof Function ->
      // Save state- changes value of storedValue
      // console.log('value', value)
      setStoredValue(value);

      // const parsedValue = JSON.parse(storedValue);
      let itemToSet = [value];

      //need the if condition to check if a value already exists in localStorage
      if (storedValue) {
        const parsedStoredValue = JSON.parse(window.localStorage.getItem('allDisputes'));

        itemToSet = [...parsedStoredValue, value];
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


export default RuleDisputeForm;