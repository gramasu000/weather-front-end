import React, {Component} from "react";
import Icon from "./Icon.js";

class WeatherCard extends Component {

    render() {
        return (
            <div class="Card" id="WeatherCard">
                <div class="h-24 md:h-40">
                    <Icon name={this.props.content.icon} />
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
