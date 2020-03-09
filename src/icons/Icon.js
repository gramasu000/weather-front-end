import React, {Component} from "react";
import "./Icon.css";
import SunnyIcon from "./SunnyIcon.js";
import NightClearIcon from "./NightClearIcon.js";
import OpenWeatherIcon from "./OpenWeatherIcon.js"

class Icon extends Component {

    render() {
        if (this.props.name === "01d") {
            return (<SunnyIcon />); 
        } else if (this.props.name === "01n") {
            return (<NightClearIcon />);
        } else {
            return (<OpenWeatherIcon />);
        }
    }
}

export default Icon;
