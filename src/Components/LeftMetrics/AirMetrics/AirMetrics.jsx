import WindIcon from "../../../Assets/wind-icon.svg"
import HumIcon from "../../../Assets/hum-icon.svg"
import RainIcon from "../../../Assets/rain-icon.svg"
import useAPIContext from "../../../Contexts/APIContext"

export default function AirMetrics() {
  const {apiData} = useAPIContext()

  return (
    <div className="air-metrics-container">
    <div className="air-metrics-container__item">
      <img src={WindIcon} alt="" />
      <p>Wind</p>
      <p>{Math.round((apiData?.current.wind_speed) * 3.6)}km/h</p>
      <div className="temperatures-main-container__day-date__line"></div>
    </div><div className="air-metrics-container__item">
        <img src={HumIcon} alt="" />
        <p>Hum</p>
        <p>{apiData?.current.humidity}%</p>
        <div className="temperatures-main-container__day-date__line"></div>
      </div><div className="air-metrics-container__item">
        <img src={RainIcon} alt="" />
        <p>Rain</p>
        <p>{apiData?.hourly[0].pop}%</p>
      </div>
      </div>
  )
}
