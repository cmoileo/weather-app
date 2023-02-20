import PinIcon from '../../../Assets/pin-icon.svg'
import WenIcon from '../../../Assets/wen-icon.svg'
import useAPIContext from '../../../Contexts/APIContext'

export default function CityHeader() {
  const {city} = useAPIContext()

  return (
    <div className="city-header-container">
        <div className='city-header-container__left'>
            <img src={PinIcon} alt="" />
            <h3>{city}</h3>
        </div>
        <img src={WenIcon} alt="" />
    </div>
  )
}
