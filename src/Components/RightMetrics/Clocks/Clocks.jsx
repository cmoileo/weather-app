import ClockIcon from "../../../Assets/clock-icon.svg"

export default function Clocks() {
  return (
    <div className="clocks-container">
        <div className="clock-card-container">
            <h3>Sunrise</h3>
            <div className="clock-card-container__item">
            <img src={ClockIcon} alt="" />
            <p>11h24</p>
            </div>
        </div>
        <div className="clock-card-container">
            <h3>Sunrise</h3>
            <div className="clock-card-container__item clock-card-container__item__2">
            <img src={ClockIcon} alt="" />
            <p>11h24</p>
            </div>
        </div>
        <div className="clock-card-container">
            <h3>Sunrise</h3>
            <div className="clock-card-container__item">
            <img src={ClockIcon} alt="" />
            <p>11h24</p>
            </div>
        </div>
    </div>
  )
}
