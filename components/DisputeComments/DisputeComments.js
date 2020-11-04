import React, { useState, useEffect, useRef } from 'react'

const DisputeComments = (props) => {
  const [store, setStore] = useState([]);

    const storeRef = useRef();

    useEffect(() => {
      if (props.allDisputes) {
        storeRef.current = props.allDisputes;
      } else {
        storeRef.current = []
      }
      setStore(props.allDisputes);
    }, []);

    useEffect(() => {
      if (props.allDisputes && props.allDisputes.length !== storeRef.current.length) {
        setStore([...storeRef.current, props.allDisputes]);
        storeRef.current = [...storeRef.current, props.allDisputes];
      }
    }, [props.allDisputes]);

  // second arg in useEffect? - something needs to change for automatic comment generation on page on submit
  return (
    <>
      DISPUTE COMMENTS
      <ul>
        {store && store.map((value, i) => {
          return <li key={i}>{value.expansion}</li>
        })}
      </ul>
      {/*if array is empty - message about no comments yet*/}
    </>
  )
}

export default DisputeComments