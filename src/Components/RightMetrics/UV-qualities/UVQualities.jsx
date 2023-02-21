import AirIndexIcon from '../../../Assets/air-index-icon.svg'
import { useContext } from 'react'
import useAPIContext from '../../../Contexts/APIContext'

export default function UVQualities() {
  const {apiData} = useAPIContext()

  return (
   <div className="uv-qualities-container">
    <div className="uv-qualities-container__card">
    <p>UV Index</p>
    <img src={AirIndexIcon} alt="" />
    <p className='uv-qualities-container__card__number'>{Math.round(apiData?.current.uvi)}/10</p>
    </div>
   </div>
  )
}
