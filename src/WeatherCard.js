import React, {Component} from "react";
import Icon from "./Icon.js";

class WeatherCard extends Component {

    render() {
        return (
            <div className="Card" id="WeatherCard">
                <div className="h-24 md:h-40">
                    <Icon name={this.props.content.icon} />
                </div>
                <div className="TextCenter">
                    <h2>{this.props.content.main}</h2>
                </div>
                <div className="TextCenter">
                    <p>{this.props.content.description}</p>
                </div>
            </div>
        );
    }

};

export default WeatherCard;
