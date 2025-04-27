import axios from "axios";
import { useState, useEffect } from "react";


export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true); // Sätt laddningstillstånd till true
    axios
      .get(url) // Gör ett GET-anrop till den angiven URL:en
      .then((response) => (response.data.Search 
        ? setData([...response.data.Search]) // Om "Search" finns i svaret, sätt det som data
        : setData([...response.data]))) // Annars sätt hela svaret som data
      .catch((error) => setIsError(true)) // Om ett fel uppstår, sätt isError till true
      .finally(() => setIsLoading(false)); // När anropet är klart, sätt ladningstillstånd till false
  }, [url]);

  return { data, isLoading, isError };
};