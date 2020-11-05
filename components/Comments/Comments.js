import React, { useState, useEffect, useRef } from 'react'

const Comments = (props) => {
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
    if(props.allDisputes && props.allDisputes.length !== storeRef.current.length) {
      setStore([...storeRef.current, props.allDisputes]);
      storeRef.current = [...storeRef.current, props.allDisputes];
    }
  }, [props.allDisputes]); 

  return (
    <>
      <h3>DISPUTED COMMENTS</h3>
      <ul>
        {store && store.map((value, i) => {
            console.log(value)
            return (
              <section key={i}>
                <h4>Dispute {i+1}</h4>
                <p>Expansion: {value.expansion}</p>
                <p>Number of Players: {value.players}</p>
                <p>Game Playtime: {value.time}</p>
                <p>Official Rule: {value.officialRule}</p>
                <p>Your House Rule: {value.interpretation}</p>
              </section>
            )
          })}
      </ul>
    </>
  )
}

export default Comments