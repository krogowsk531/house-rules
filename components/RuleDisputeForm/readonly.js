function useGetLocalStorage(key, initialValue) {

  //defining array of two values using useState
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

function useLocalStorage(key) {

  const [ storedValue, setStoredValue ] = useGetLocalStorage('allDisputes');
  const setValue = value => {
    console.log('value', value)
    try {
      setStoredValue(value);

      let itemToSet = [value];
      if (storedValue) {
        const parsedStoredValue = JSON.parse(window.localStorage.getItem('allDisputes'));

        itemToSet = [...parsedStoredValue, value];
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


export default RuleDisputeForm;