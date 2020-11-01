import React, { useState, useEffect, useRef } from 'react'

const DisputeComments = (props) => {
  const [store, setStore] = useState([]);

    const storeRef = useRef();

    useEffect(() => {
        storeRef.current = props.gameDetails;
        setStore(props.gameDetails);
    }, []);

    useEffect(() => {
        if (props.gameDetails && props.gameDetails.length !== storeRef.current.length) {
            setStore([...storeRef.current, props.gameDetails]);
            storeRef.current = [...storeRef.current, props.gameDetails];
        }
    }, [props.gameDetails]);

  // second arg in useEffect? - something needs to change for automatic comment generation on page on submit
  return (
    <>
      DISPUTE COMMENTS
      <ul>
        {store && store.map((value, i) => {
          return <li key={i}>{value.expansion}</li>
        })}
      </ul>
    </>
  )
}

export default DisputeComments