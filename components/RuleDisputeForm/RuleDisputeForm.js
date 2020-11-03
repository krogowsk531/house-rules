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

  )
  
}
export default RuleDisputeForm;

//eventually upvote, downvote, and link
