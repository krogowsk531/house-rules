import React, {useState} from 'react'

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

export function useAllDisputeComments(key) {
  const [ storedValue, setStoredValue ] = useLocalStorage('allDisputes')

  const setValue = value => {
    try {
      setStoredValue(value)
      let itemToSet = [value]
      if (storedValue) {
        const parsedStoredValue = JSON.parse(window.localStorage.getItem('allDisputes'))
        itemToSet = [...parsedStoredValue, value]
      }
      window.localStorage.setItem(key, JSON.stringify(itemToSet));  
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue]
}

