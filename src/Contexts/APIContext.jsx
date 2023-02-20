import { createContext, useContext, useEffect, useState } from "react";

const APIContext = createContext();

export const APIContextProvider = ({children }) => {
    const [apiData, setApiData] = useState(null);
    const [city, setCity] = useState('Bordeaux, France');

    const [tempMetrics, setTempMetrics] = useState("cel")
  
    useEffect(() => {
      async function getApiData() {
        let coordinates = await fetch(
          "http://api.openweathermap.org/geo/1.0/direct?q=" +
          city +
          "&limit=5&appid=592f1fe6fbbdf00e5d4ac9bfee6bf0ae"
        ).then((coordinates) => coordinates.json());
        let lat = coordinates[0].lat;
        let lon = coordinates[0].lon;
        const response = await fetch (
          "https://api.openweathermap.org/data/3.0/onecall?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=d057e468d4ec84cf017e94a0d6911d7b"
        );
        const jsonData = await response.json();
        setApiData(jsonData);
      }

      getApiData()
  
    }, [city]);


    return (
        <APIContext.Provider value={{ apiData, city, tempMetrics, setTempMetrics }}>
            { children }
        </APIContext.Provider>
    );
};

const useAPIContext = () => useContext(APIContext);

export default useAPIContext;