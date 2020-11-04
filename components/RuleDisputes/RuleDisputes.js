import React from 'react'
import { useState } from 'react';
import Comments from '../Comments/Comments.js'
import { useLocalStorage } from '../../hooks/hooks.js';

const RuleDisputeForm = () => {
  const [expansion, setExpansion] = useState('');
  const [numPlayers, setNumPlayers] = useState(1);
  const [minutesPlayed, setMinutesPlayed] = useState(0);
  const [officialRule, setOfficialRule] = useState('');
  const [ruleInterpretation, setRuleInterpretation] = useState('');
  const [singleDispute, setSingleDispute] = useState({
    expansion: '',
    numPlayers,
    gameplayTime: 0,
    officialRule: 0,
    ruleInterpretation: '',
  });

  const [allDisputes, setAllDisputes] = useLocalStorage('allDisputes', [])

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
      onChange={event => setMinutesPlayed(parseInt(event.target.value))}
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
      name='ruleInterpretation'
      onChange={event => setRuleInterpretation(event.target.value)}
      />
      <button onClick={(event) => submitForm(event)}>SUBMIT</button>
    </form>
    <Comments />
  </section>
  )
}
export default RuleDisputeForm;


