import React, {Component} from "react";
import "./Icon.css";
import SunnyIcon from "./SunnyIcon.js";
import OpenWeatherIcon from "./OpenWeatherIcon.js"

class Icon extends Component {

    render() {
        if (this.props.name === "01d") {
            return (<SunnyIcon />); 
        } else {
            return (<OpenWeatherIcon />);
        }
    }
}

export default Icon;
