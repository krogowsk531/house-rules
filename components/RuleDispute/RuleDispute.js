import React, { useState, useEffect } from 'react'
import RuleDisputeForm from '../RuleDisputeForm/RuleDisputeForm'

// let ALL_DISPUTES = window.localStorage.getItem('disputedRules')
// ? JSON.parse(window.localStorage.getItem('disputedRules'))
// : []


const RuleDispute = () => {
  // const [disputedRules, setDisputedRules] = useState(window.localStorage.getItem('disputedRules')
  // ? JSON.parse(window.localStorage.getItem('disputedRules'))
  // : [])
  const [disputedRules, setDisputedRules] = useState([])
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
    console.log('window')
    console.log(window)
    setDisputedRules(window.localStorage.getItem('disputedRules')
      ? JSON.parse(window.localStorage.getItem('disputedRules'))
      : [])
    localStorage.setItem('disputedRules', JSON.stringify(disputedRules))
  })
    // useEffect(() => {
    //   return null
    // },)

    // return (
    //   <RuleDisputeForm
    //   expansion={expansion}
    //   numPlayers={numPlayers}
    //   playTime={playTime}
    //   officialRule={officialRule}
    //   userInterpretation={userInterpretation}
    //   handleInput={handleInput}
    //   handleSubmitRule={handleSubmitRule}
    //   />
    // )

  return(
    <div></div>
  )
}


export default RuleDispute;
