import NightIcon from "../../../Assets/night-icon.svg"

export default function LeftHeader() {
  return (
    <div className="left-header-container">
        <img src={NightIcon} alt="" className="main-icon" />
        <div className="metrics-button">
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
