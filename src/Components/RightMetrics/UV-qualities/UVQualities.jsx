import AirIndexIcon from '../../../Assets/air-index-icon.svg'
import { useContext } from 'react'
import useAPIContext from '../../../Contexts/APIContext'

export default function UVQualities() {

  return (
   <div className="uv-qualities-container">
    <div className="uv-qualities-container__card">
      <p>Air qualities</p>
      <img src={AirIndexIcon} alt="" />
      <p className='uv-qualities-container__card__number'>2/10</p>

    </div>
    <div className="uv-qualities-container__card">
    <p>UV Index</p>
    <img src={AirIndexIcon} alt="" />
    <p className='uv-qualities-container__card__number'>6/10</p>
    </div>
   </div>
  )
}
