import React, { useState, useEffect } from 'react'


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

  // window ? window.localStorage.getItem(key) : null;
  const handleInput = (event, setInput) => {
    setInput(event.target.value)
  }

  const handleSubmitRule = event => {
    event.preventDefault()
    if (expansion !== '' && numPlayers > 0 && playTime > 0 && officialRule !== '' && userInterpretation !== '') {
      const disputedRule = { expansion, numPlayers, playTime, officialRule, userInterpretation }
      setDisputedRules([...disputedRules, disputedRule])
      setExpansion('')
      setNumPlayers(0)
      setPlayTime(0)
      setOfficalRule('')
      setUserInterpreatation('')
    } else {
      console.log('Invalid entry')
    }
  }

  useEffect(() => {
    localStorage.setItem('disputedRules', JSON.stringify(disputedRules))
  }, [disputedRules])

  return(
    <RuleDisputeForm
      expansion={expansion}
      numPlayers={numPlayers}
      playTime={playTime}
      officialRule={officialRule}
      userInterpretation={userInterpretation}
      handleInput={handleInput}
      handleSubmitRule={handleSubmitRule}
    />
  )
}
