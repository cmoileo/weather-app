import useAPIContext from "../../../Contexts/APIContext"
import moment from 'moment';

export default function Temperatures() {
  const {apiData, tempMetrics} = useAPIContext()

  const todayDate = moment().format("Do MMMM YYYY");
  const todayDay = moment().format("dddd");
  const time = moment().format("h:mm a");

  return (
    <div className="temperatures-main-container">
        <h1>{tempMetrics === 'cel' ? (apiData?.current.temp+ -273,15) : (apiData?.current.temp + - -459,67)}°</h1>
        <p>{todayDate}</p>
        <div className="temperatures-main-container__day-date">
            <p>{todayDay}</p>
            <div className="temperatures-main-container__day-date__line"></div>
            <p>{time}</p>
        </div>
    </div>
  )
}
