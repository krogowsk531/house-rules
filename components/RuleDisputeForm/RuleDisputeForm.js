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

  return(
    <section>
    <form>
      <label>Expansion Name: </label>
      <input
      type='text'
      name='expansion'
      />
      <label>Number of players: </label>
      <input
      type='number'
      name='number'
      />
      <label>Gameplay time in mintues: </label>
      <input
      type='number'
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
      <button onClick={(event) => submitForm(event)}>SUBMIT</button>
    </form>
  </section>
  )
}
export default RuleDisputeForm;

//eventually upvote, downvote, and link
