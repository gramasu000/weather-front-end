import React, {Component} from "react";
import Icon from "./icons/Icon.js";

class WeatherCard extends Component {

    render() {
        return (
            <div class="Card" id="WeatherCard">
                <div class="h-40">
                    <Icon />
                </div>
                <div class="TextCenter">
                    <h2>{this.props.content.main}</h2>
                </div>
                <div class="TextCenter">
                    <p>{this.props.content.description}</p>
                </div>
            </div>
        );
    }

};

export default WeatherCard;
