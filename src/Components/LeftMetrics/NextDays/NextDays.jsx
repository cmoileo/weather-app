import useAPIContext from '../../../Contexts/APIContext'
import CloudIcon from "../../../Assets/cloud-icon.svg"

export default function NextDays() {
  const {apiData, tempMetrics} = useAPIContext()

  setTimeout(() => {
    console.log(apiData)
  }, 2000);



  return (
      <div className="next-days-container">
{apiData?.daily && Object.keys(apiData.daily).map((keyName, i) => (
    <div className="day-card-container" id={keyName} key={keyName}>
        <h3>{tempMetrics === 'cel' ? (apiData.daily[keyName].temp.day+ -273,15) : (apiData.current.temp + - -459,67)}°</h3>
        <img src={CloudIcon} className="day-card-container__icon" alt="" />
        <p>Friday</p>
    </div>
))}
      </div>
      )
    }
