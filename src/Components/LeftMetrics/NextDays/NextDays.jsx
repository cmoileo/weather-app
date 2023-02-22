import useAPIContext from '../../../Contexts/APIContext'
import moment from 'moment'

export default function NextDays() {
  const {apiData, tempMetrics} = useAPIContext()

  return (
      <div className="next-days-container">
{apiData?.daily && Object.keys(apiData.daily).map((keyName, i) => (
    <div className="day-card-container" id={keyName} key={keyName}>
        <h3>{tempMetrics ? Math.round((apiData.daily[keyName].temp.day+ -273.15)) : Math.round((apiData.daily[keyName].temp.day + -273.15) *9/5 + 32) }°</h3>
        <img src={`http://openweathermap.org/img/wn/${apiData?.daily[i].weather[0].icon}@2x.png`} className="day-card-container__icon" alt="" />
        <p>{moment().add([i+1], 'days').format('dddd').toString()}</p>
    </div>
))}
      </div>
      )
    }
