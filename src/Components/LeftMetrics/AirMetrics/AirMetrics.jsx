import WindIcon from "../../../Assets/wind-icon.svg"
import HumIcon from "../../../Assets/hum-icon.svg"
import RainIcon from "../../../Assets/rain-icon.svg"

export default function AirMetrics() {
  return (
    <div className="air-metrics-container">
    <div className="air-metrics-container__item">
      <img src={WindIcon} alt="" />
      <p>Wind</p>
      <p>10km/h</p>
      <div className="temperatures-main-container__day-date__line"></div>
    </div><div className="air-metrics-container__item">
        <img src={HumIcon} alt="" />
        <p>Hum</p>
        <p>54%</p>
        <div className="temperatures-main-container__day-date__line"></div>
      </div><div className="air-metrics-container__item">
        <img src={RainIcon} alt="" />
        <p>Rain</p>
        <p>0.2%</p>
      </div>
      </div>
  )
}
