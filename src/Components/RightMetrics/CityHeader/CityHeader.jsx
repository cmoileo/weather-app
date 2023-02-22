import { useRef } from 'react'
import PinIcon from '../../../Assets/pin-icon.svg'
import useAPIContext from '../../../Contexts/APIContext'

export default function CityHeader() {
  const {city, setCity, getApiData} = useAPIContext()

  const searchBarRef = useRef(null)
  const inputRef = useRef(null)

  const handleMouseEnter = () => {
    inputRef.current.style.width = "350px"
  }
  const handleMouseLeave = () => {
    inputRef.current.style.width = "20px"
  }
  const handleClick = () => {
    setCity(inputRef.current.value)
    getApiData()
    inputRef.current.value = ""
  }

  console.log(navigator.userAgentData.mobile)

  return (
    <div className="city-header-container">
        <div className='city-header-container__left'>
            <img src={PinIcon} alt="" />
            <h3>{city}</h3>
        </div>
        <div class="city-search-bar" ref={searchBarRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <input placeholder='Search...' class='js-search' type="text" ref={inputRef}/>
          <i class="fa fa-search" onClick={handleClick}></i>
        </div>
    </div>
  )
}
