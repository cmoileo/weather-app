import useAPIContext from "../../../Contexts/APIContext"

export default function LeftHeader() {
  const {tempMetrics, setTempMetrics, apiData} = useAPIContext()

  const handleClick = () => {
   setTempMetrics(!tempMetrics)
  };

  return (
    <div className="left-header-container">
        <img src={`http://openweathermap.org/img/wn/${apiData?.current.weather[0].icon}@2x.png`} alt="" className="main-icon" />
        <div className="metrics-button">
            <div className="switch__container">
                <input id="switch-shadow" className="switch switch--shadow" type="checkbox" onClick={handleClick}/>
                <label for="switch-shadow">
                </label>
                <div className="metrics-button-cara">
                  <p className="metrics-button-cara__c">C</p>
                  <p className="metrics-button-cara__f">F</p>
                </div>
            </div>
        </div>
    </div>
  )
}
