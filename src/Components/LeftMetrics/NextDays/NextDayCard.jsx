import CloudIcon from "../../../Assets/cloud-icon.svg"

export default function NextDayCard() {
  return (
    <div className="day-card-container">
        <h3>23°</h3>
        <img src={CloudIcon} className="day-card-container__icon" alt="" />
        <p>Friday</p>
    </div>
  )
}
