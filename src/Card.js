import React, {Component} from "react";
import "./Card.css";
import LocationCard from "./LocationCard.js";
import WeatherCard from "./WeatherCard.js";

class Card extends Component {
    
    render () {

        if (this.props.type === "location") {
            return (
                <div class="Card">
                    <LocationCard content={this.props.content} />
                </div>
            );
        } else if (this.props.type === "weather") {
            return (
                <div class="Card">
                    <WeatherCard content={this.props.content} />
                </div>
            );
        }

    }
}

export default Card;
