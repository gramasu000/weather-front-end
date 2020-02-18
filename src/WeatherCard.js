import React, {Component} from "react";
import Icon from "./icons/Icon.js";
import "./WeatherCard.css";

class WeatherCard extends Component {

    render() {
        return (
            <div class="WeatherCard">
                <div>
                    <div class="IconContainer">
                        <Icon />
                    </div>
                    <div class="TextContainer">
                        <h2>{this.props.content.main}</h2>
                    </div>
                    <div class="TextContainer">
                    <p>{this.props.content.description}</p>
                    </div>
                </div>
                <div>
                    <h1>{this.props.content.temp}</h1>
                    <h3>{this.props.content.tempmax}</h3>
                    <h3>{this.props.content.tempmin}</h3>
                    <p>Feels Like <b>{this.props.content.feellike}</b></p>
                </div>
            </div>
        );
    }

};

export default WeatherCard;
