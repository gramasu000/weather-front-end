import React, {Component} from "react";
import "./Card.css";
import ConnectedLocationCard from "./LocationCard.js";
import TextCard from "./TextCard.js";
import ConnectedWeatherCard from "./WeatherCard.js";
import ConnectedTemperatureCard from "./TemperatureCard.js";

class Card extends Component {
    
    render () {

        if (this.props.type === "connectedLocation") {
            return (
                <div className="CardContainer">
                    <ConnectedLocationCard />
                </div>
            );
        } else if (this.props.type === "connectedWeather") {
            return (
                <div className="CardContainer">
                    <ConnectedWeatherCard />
                    <ConnectedTemperatureCard />
                </div>
            );
        } else if (this.props.type === "connectedLocationInput") {
            return (
                <div className="CardContainer">
                    <ConnectedLocationInputCard />
                </div>
            );
        } else if (this.props.type === "connectedMenu") {
            return (
                <div className="CardContainer">
                    <ConnectedMenuCard />
                </div>
            );
        } else {
            return;
        }

    }
}

export default Card;
