import LeftHeader from "./LeftHeader/LeftHeader";
import Temperatures from "./Temperatures/Temperatures";
import AirMetrics from "./AirMetrics/AirMetrics";
import NextDays from "./NextDays/NextDays";

export default function LeftMetrics() {
    return (
      <div className="main-left-container">
        <div className="main-container">
            <LeftHeader />
            <Temperatures />
            <AirMetrics />
            <NextDays />
        </div>
      </div>
    )
  }
  