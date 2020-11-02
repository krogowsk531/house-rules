import React from 'react'


const ALL_DISPUTES = localStorage.getItem('disputedRules')
  ? JSON.parse(localStorage.getItem('disputedRules'))
  : []


const RuleDispute = () => {
  const [disputedRules, setDisputedRules] = useState(ALL_DISPUTES)
  const [expansion, setExpansion] = useState('')
  const [numPlayers, setNumPlayers] = useState(0)
  const [playTime, setPlayTime] = useState(0)
  const [officialRule, setOfficalRule] = useState('')
  const [userInterpretation, setUserInterpreatation] = useState('')
}
  // window ? window.localStorage.getItem(key) : null;
