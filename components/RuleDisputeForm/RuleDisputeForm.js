import React from 'react'
import { useState } from 'react';

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


const RuleDisputeForm = () => {
  const [expansion, setExpansion] = useLocalStorage('expansion', 'setExpansion')
  // const [number, setNumber] = useLocalStorage('number', 'setNumber')
    return(
      <section>
      <form>
        <label>Expansion Name: </label>
        <input
        type='text'
        name='expansion'
        value={expansion}
        onChange={event =>setExpansion(event.target.value)}
        />
        <label>Number of players: </label>
        <input
        type='text'
        name='number'
        value={number}
        onChange={event =>setNumber(event.target.value)}
        />
        <label>Gameplay time: </label>
        <input
        type='time'
        name='time'
        />
        <label>Official Rule: </label>
        <input
        type='text'
        name='officialRule'
        />
        <label>Interpretation of Rule: </label>
        <input
        type='text'
        name='InterpretationRule'
        />

        <button>SUBMIT</button>
      </form>
      </section>
  )}


function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item): initialValue
    } catch (error) {
      console.log(error)
      return initialValue;
    }
  })
}



export default RuleDisputeForm;

//eventually upvote, downvote, and link
