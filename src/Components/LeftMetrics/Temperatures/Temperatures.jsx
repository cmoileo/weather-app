import useAPIContext from "../../../Contexts/APIContext"
import moment from 'moment';

export default function Temperatures() {
  const {apiData, tempMetrics} = useAPIContext()

  const todayDate = moment().format("Do MMMM YYYY");
  const todayDay = moment().format("dddd");
  const time = moment().format("h:mm a");

  return (
    <div className="temperatures-main-container">
        <h1>{tempMetrics ? (Math.round(apiData?.current.temp+ -273.15)) : (Math.round(apiData?.current.temp+ -273.15) * 9/5 + 32)}°</h1>
        <p>{todayDate}</p>
        <div className="temperatures-main-container__day-date">
            <p>{todayDay}</p>
            <div className="temperatures-main-container__day-date__line"></div>
            <p>{time}</p>
        </div>
    </div>
  )
}
