import React from "react";
import "./Icon.css";
import wiDayHaze from "./svg/wi-day-haze.svg";
import wiDaySunny from "./svg/wi-day-sunny.svg";
import wiNightClear from "./svg/wi-night-clear.svg";
import wiDayCloudy from "./svg/wi-day-cloudy.svg";
import wiNightCloudy from "./svg/wi-night-alt-cloudy.svg";
import wiCloud from "./svg/wi-cloud.svg";
import wiCloudy from "./svg/wi-cloudy.svg";
import wiShowers from "./svg/wi-showers.svg";
import wiDayRain from "./svg/wi-day-rain.svg";
import wiNightRain from "./svg/wi-night-alt-rain.svg";
import wiThunderstorm from "./svg/wi-thunderstorm.svg";
import wiSnowflake from "./svg/wi-snowflake-cold.svg";
import wiFog from "./svg/wi-fog.svg";

function Icon({name}) {
  switch(name) {
    case "01d":
      return (<img className="Icon" src={wiDaySunny} />);
    case "01n":
      return (<img className="Icon" src={wiNightClear} />);
    case "02d":
      return (<img className="Icon" src={wiDayCloudy} />);
    case "02n":
      return (<img className="Icon" src={wiNightCloudy} />);
    case "03d":
      return (<img className="Icon" src={wiCloud} />);
    case "03n":
      return (<img className="Icon" src={wiCloud} />);
    case "04d":
      return (<img className="Icon" src={wiCloudy} />);
    case "04n":
      return (<img className="Icon" src={wiCloudy} />);
    case "09d":
      return (<img className="Icon" src={wiShowers} />);
    case "09n":
      return (<img className="Icon" src={wiShowers} />);
    case "10d":
      return (<img className="Icon" src={wiDayRain} />);
    case "10n":
      return (<img className="Icon" src={wiNightRain} />);
    case "11d": 
      return (<img className="Icon" src={wiThunderstorm} />);
    case "11n":
      return (<img className="Icon" src={wiThunderstorm} />);
    case "13d":
      return (<img className="Icon" src={wiSnowflake} />);
    case "13n":
      return (<img className="Icon" src={wiSnowflake} />);
    case "50d":
      return (<img className="Icon" src={wiFog} />);
    case "50n":
      return (<img className="Icon" src={wiFog} />);
    default:
      return (<img className="Icon" src={wiDayHaze} />);
  }
}

export default Icon;
