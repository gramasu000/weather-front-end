import React, {Component} from "react";
import "./Card.css";
import TextCard from "./TextCard.js";
import WeatherCard from "./WeatherCard.js";
import TemperatureCard from "./TemperatureCard.js";

class Card extends Component {
    
    render () {

        if (this.props.type === "location") {
            return (
                <div className="CardContainer">
                    <TextCard weight="h2" content={this.props.content} />
                </div>
            );
        } else if (this.props.type === "weather") {
            return (
                <div className="CardContainer">
                    <WeatherCard content={this.props.content.weather} />
                    <TemperatureCard content={this.props.content.temperature} />
                </div>
            );
        } else {
            return (
                <div className="CardContainer">
                    <TextCard content={this.props.content} />
                </div>
            );
        }   

    }
}

export default Card;