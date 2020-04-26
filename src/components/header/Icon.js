import React, {Component} from "react";
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

class Icon extends Component {

    render() {
        if (this.props.name === "01d") {
            return (<img className="Icon" src={wiDaySunny} />);
        } else if (this.props.name === "01n") {
            return (<img className="Icon" src={wiNightClear} />);
        } else if (this.props.name === "02d") {
            return (<img className="Icon" src={wiDayCloudy} />);
        } else if (this.props.name === "02n") {
            return (<img className="Icon" src={wiNightCloudy} />);
        } else if (this.props.name === "03d" || this.props.name === "03n") {
            return (<img className="Icon" src={wiCloud} />);
        } else if (this.props.name === "04d" || this.props.name === "04n") {
            return (<img className="Icon" src={wiCloudy} />);
        } else if (this.props.name === "09d" || this.props.name === "09n") {
            return (<img className="Icon" src={wiShowers} />);
        } else if (this.props.name === "10d") {
            return (<img className="Icon" src={wiDayRain} />);
        } else if (this.props.name === "10n") {
            return (<img className="Icon" src={wiNightRain} />);
        } else if (this.props.name === "11d" || this.props.name === "11n") {
            return (<img className="Icon" src={wiThunderstorm} />);
        } else if (this.props.name === "13d" || this.props.name === "13n") {
            return (<img className="Icon" src={wiSnowflake} />);
        } else if (this.props.name === "50d" || this.props.name === "50n") {
            return (<img className="Icon" src={wiFog} />);
        } else {
            return (<img className="Icon" src={wiDayHaze} />);
        }
    }
}

export default Icon;
