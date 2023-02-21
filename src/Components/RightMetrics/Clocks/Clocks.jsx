import ClockIcon from "../../../Assets/clock-icon.svg"
import useAPIContext from "../../../Contexts/APIContext";

export default function Clocks() {
  const {apiData} = useAPIContext()

  return (
    <div className="clocks-container">
        <div className="clock-card-container">
            <h3>Sunrise</h3>
            <div className="clock-card-container__item">
            <img src={ClockIcon} alt="" />
            <p>{new Date(apiData?.current.sunrise * 1000).toLocaleTimeString("fr-FR")}</p>
            </div>
        </div>
        <div className="clock-card-container">
            <h3>Golden Hour</h3>
            <div className="clock-card-container__item clock-card-container__item__2">
            <img src={ClockIcon} alt="" />
            <p>{new Date(apiData?.current.sunrise * 1001).toLocaleTimeString("fr-FR")}</p>
            </div>
        </div>
        <div className="clock-card-container">
            <h3>Sunset</h3>
            <div className="clock-card-container__item">
            <img src={ClockIcon} alt="" />
            <p>{new Date(apiData?.current.sunset * 1000).toLocaleTimeString("fr-FR")}</p>
            </div>
        </div>
    </div>
  )
}
