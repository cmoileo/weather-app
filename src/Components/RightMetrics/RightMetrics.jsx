import CityHeader from "./CityHeader/CityHeader";
import Clocks from "./Clocks/Clocks";
import UVQualities from "./UV-qualities/UVQualities";

export default function RightMetrics() {
  return (
    <div className="main-right-container">
      <div className="main-container">
      <CityHeader />
      <Clocks />
      <UVQualities />
      </div>
    </div>
  )
}
