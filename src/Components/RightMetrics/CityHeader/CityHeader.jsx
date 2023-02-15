import PinIcon from '../../../Assets/pin-icon.svg'
import WenIcon from '../../../Assets/wen-icon.svg'

export default function CityHeader() {
  return (
    <div className="city-header-container">
        <div className='city-header-container__left'>
            <img src={PinIcon} alt="" />
            <h3>Bordeaux, France</h3>
        </div>
        <img src={WenIcon} alt="" />
    </div>
  )
}
