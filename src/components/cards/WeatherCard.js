import React from "react";
import { connect } from "react-redux";
import Icon from "../icons/Icon.js";

const mapStateToProps = function(state) {
  return {
    icon: state.weatherIcon,
    main: state.weatherMain,
    description: state.weatherDescription
  }
}

function WeatherCard({icon, main, description}) {
  return (
      <div className="Card" id="WeatherCard">
          <div className="h-40">
              <Icon name={icon} />
          </div>
          <div className="TextCenter">
              <h2>{main}</h2>
          </div>
          <div className="TextCenter">
              <p>{description}</p>
          </div>
      </div>
  );
};

const ConnectedWeatherCard = connect(mapStateToProps)(WeatherCard);

export default ConnectedWeatherCard;
