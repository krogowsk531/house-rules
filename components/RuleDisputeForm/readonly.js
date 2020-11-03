function getLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window ? window.localStorage.getItem(key) : null;
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  return [storedValue, setStoredValue];
}

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once

  const [ storedValue, setStoredValue ] = getLocalStorage('gameDetails');

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
          value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);

      // const parsedValue = JSON.parse(storedValue);
      let itemToSet = [valueToStore];

      if (storedValue) {
        const parsedStoredValue = JSON.parse(window.localStorage.getItem('gameDetails'));

        itemToSet = [...parsedStoredValue, ...itemToSet];
      }
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(itemToSet));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}