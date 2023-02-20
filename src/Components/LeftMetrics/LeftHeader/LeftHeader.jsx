import NightIcon from "../../../Assets/night-icon.svg"
import useAPIContext from "../../../Contexts/APIContext"

export default function LeftHeader() {
  const {tempMetrics, setTempMetrics} = useAPIContext()

  const handleClick = () => {
    setTempMetrics((prevMetrics) => {
      return prevMetrics === "cel" ? "far" : "cel";
    });
  };

  return (
    <div className="left-header-container">
        <img src={NightIcon} alt="" className="main-icon" />
        <div className="metrics-button" onClick={handleClick}>
            <div className="switch__container">
                <input id="switch-shadow" className="switch switch--shadow" type="checkbox"/>
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
