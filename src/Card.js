import React, {Component} from "react";
import "./Card.css";
import ConnectedLocationCard from "./LocationCard.js";
import TextCard from "./TextCard.js";
import ConnectedWeatherCard from "./WeatherCard.js";
import ConnectedTemperatureCard from "./TemperatureCard.js";

class Card extends Component {
    
    render () {

        if (this.props.type === "location") {
            return (
                <div className="CardContainer">
                    <ConnectedLocationCard />
                </div>
            );
        } else if (this.props.type === "weather") {
            return (
                <div className="CardContainer">
                    <ConnectedWeatherCard />
                    <ConnectedTemperatureCard />
                </div>
            );
        } else if (this.props.type === "text") {
            return (
                <div className="CardContainer">
                    <TextCard content={this.props.content} />
                </div>
            );
        } else {
            return;
        }

    }
}

export default Card;
