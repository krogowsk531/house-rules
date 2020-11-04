import React from 'react'
import { useState, useEffect } from 'react';
import Comments from '../Comments/Comments.js'
import { useLocalStorage } from '../../hooks/hooks.js';

const RuleDisputeForm = () => {
  const [expansion, setExpansion] = useState('');
  const [numPlayers, setNumPlayers] = useState(1);
  const [minutesPlayed, setMinutesPlayed] = useState(0);
  const [officialRule, setOfficialRule] = useState('');
  const [ruleDispute, setRuleDispute] = useState('');
  const [singleDispute, setSingleDispute] = useState({
    expansion: '',
    numPlayers,
    minutesPlayed: 0,
    officialRule: 0,
    ruleDispute: '',
  });

  useEffect(() => {
    setSingleDispute({
      expansion,
      numPlayers,
      minutesPlayed,
      officialRule,
      ruleDispute
    })
  }, [
    expansion,
    numPlayers,
    minutesPlayed,
    officialRule,
    ruleDispute
  ])

  const [allDisputes, setAllDisputes] = useAllDisputeComments('allDisputes', [])

  const submitForm = (event) =>{
    event.preventDefault();
    setAllDisputes(singleDispute)
  }

  return(
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
      value={numPlayers}
      onChange={event => setNumPlayers(parseInt(event.target.value))}
      />
      <label>Gameplay time in mintues: </label>
      <input
      type='number'
      name='minutesPlayed'
      value={minutesPlayed}
      onChange={event => setMinutesPlayed(parseInt(event.target.value))}
      />
      <label>Official Rule: </label>
      <input
      type='text'
      name='officialRule'
      value={officialRule}
      onChange={event => setOfficialRule(event.target.value)}
      />
      <label>Interpretation of Rule: </label>
      <input
      type='text'
      name='ruleDispute'
      value={ruleDispute}
      onChange={event => setRuleDispute(event.target.value)}
      />
      <button onClick={(event) => submitForm(event)}>SUBMIT</button>
    </form>
    <Comments allDisputes={allDisputes} />
  </section>
  )
}

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window ? window.localStorage.getItem(key) : null
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })
  return [storedValue, setStoredValue]
}

function useAllDisputeComments(key) {
  const [ storedValue, setStoredValue ] = useLocalStorage('allDisputes')
}
export default RuleDisputeForm;


