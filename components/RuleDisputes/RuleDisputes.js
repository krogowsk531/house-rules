import React from 'react'
import { useState } from 'react';
import Comments from '../Comments/Comments.js'
import { useLocalStorage } from '../../hooks/hooks.js';

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

  const [gameDetails, setGameDetails] = useLocalStorage('gameDetails', [])

  const submitForm = (event) =>{
    event.preventDefault();
    setGameDetails(singleDispute)
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
      value={players}
      onChange={event => setPlayers(parseInt(event.target.value))}
      />
      <label>Gameplay time in mintues: </label>
      <input
      type='number'
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
    <Comments />
  </section>
  )
}
export default RuleDisputeForm;


