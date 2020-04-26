import React, {Component} from "react";
import { connect } from "react-redux";
import Icon from "./Icon.js";

const mapStateToProps = function(state) {
  return {
    icon: state.weatherIcon,
    main: state.weatherMain,
    description: state.weatherDescription
  }
}

class WeatherCard extends Component {

    render() {
        return (
            <div className="Card" id="WeatherCard">
                <div className="h-40">
                    <Icon name={this.props.icon} />
                </div>
                <div className="TextCenter">
                    <h2>{this.props.main}</h2>
                </div>
                <div className="TextCenter">
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }

};

const ConnectedWeatherCard = connect(mapStateToProps)(WeatherCard);

export default ConnectedWeatherCard;
