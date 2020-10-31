import React from 'react'
import { useState, useEffect } from 'react'

const DisputeComments = () => {

  const [store, setStore] = useState([])
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (store.length) {
      setCounter(store.length)
    }
  }, [store])

  useEffect(() => {
    console.log('counter', counter)
    const parsedStoredValue = window ? JSON.parse(window.localStorage.getItem('gameDetails')) : []
    setStore(parsedStoredValue)
  }, [counter])

  // second arg in useEffect? - something needs to change for automatic comment generation on page on submit
  return (
    <>
      DISPUTE COMMENTS
      <ul>
        {store.map(value => {
          return <li>{value.expansion}</li>
        })}
      </ul>
    </>
  )
}

export default DisputeComments