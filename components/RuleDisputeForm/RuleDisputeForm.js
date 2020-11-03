import React from 'react'
import { useState } from 'react';

// function App() {
//   // Similar to useState but first arg is key to the value in local storage.
//   const [name, setName] = useLocalStorage('name', 'Bob');
//
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//     </div>
//   );
// }



const RuleDisputeForm = () => {
  const [expansion, setExpansion] = useLocalStorage('expansion', 'setExpansion')
  // const [number, setNumber] = useLocalStorage('number', 'setNumber')
    return(
      <section>
      <form>
        <label>Expansion Name: </label>
        <input
        type='text'
        name='expansion'
        value={expansion}
        onChange={() => handleInput(event, setExpansion)}
        />
        <label>Number of players: </label>
        <input
        type='text'
        name='number'
        value={number}
        onChange={() => handleInput(event, setNumPlayers)}
        />
        <label>Gameplay time: </label>
        <input
        type='time'
        name='time'
        onChange={() => handleInput(event, setPlayTime)}
        />
        <label>Official Rule: </label>
        <input
        type='text'
        name='officialRule'
        onChange={() => handleInput(event, setOfficialRule)}
        />
        <label>Interpretation of Rule: </label>
        <input
        type='text'
        name='InterpretationRule'
        onChange={() => handleInput(event, setUserInterpreatation)}
        />

        <button>SUBMIT</button>
      </form>
      </section>
  )}

  // function useLocalStorage(key, initialValue) {
  // // State to store our value
  // // Pass initial state function to useState so logic is only executed once
  // const [storedValue, setStoredValue] = useState(() => {
  //   try {
  //     // Get from local storage by key
  //     const item = window.localStorage.getItem(key);
  //     // Parse stored json or if none return initialValue
  //     return item ? JSON.parse(item) : initialValue;
  //   } catch (error) {
  //     // If error also return initialValue
  //     console.log(error);
  //     return initialValue;
  //   }
  // });

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item): initialValue
    } catch (error) {
      console.log(error)
      return initialValue;
    }
  })
}

// const Image = (props) => {
//   const [width, setWidth] = React.useState(0);
//   React.useEffect(() => {
//     setWidth(window.innerWidth);
//   });
//   return <img src={props.src} style={{ width: width }} />;
// };


export default RuleDisputeForm;

//eventually upvote, downvote, and link
