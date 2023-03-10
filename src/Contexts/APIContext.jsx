import { createContext, useContext, useEffect, useState } from "react";

const APIContext = createContext();

export const APIContextProvider = ({children }) => {
    const [apiData, setApiData] = useState(null);
    const [city, setCity] = useState('Bordeaux, France');

    const [tempMetrics, setTempMetrics] = useState(true)

    async function getApiData() {
      let coordinates = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=" +
        city +
        "&limit=5&appid=" + import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
      ).then((coordinates) => coordinates.json());
      let lat = coordinates[0].lat;
      let lon = coordinates[0].lon;
      const response = await fetch (
        "https://api.openweathermap.org/data/3.0/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=" + import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
      );
      const jsonData = await response.json();
      setApiData(jsonData);
    }
  
    useEffect(() => {
      getApiData()
  
    }, [city]);


    return (
        <APIContext.Provider value={{ apiData, city, setCity, tempMetrics, setTempMetrics, getApiData }}>
            { children }
        </APIContext.Provider>
    );
};

const useAPIContext = () => useContext(APIContext);

export default useAPIContext;