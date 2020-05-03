import React from "react";
import "./Card.css";
import ConnectedLocationCard from "./LocationCard.js";
import ConnectedLocationInputCard from "./LocationInputCard.js";
import ConnectedWeatherCard from "./WeatherCard.js";
import ConnectedTemperatureCard from "./TemperatureCard.js";
import ConnectedMenuCard from "./MenuCard.js";

function Card({type, inputRef}) {
  switch (type) {
    case "connectedLocation":
      return (
        <div className="CardContainer">
          <ConnectedLocationCard />
        </div>
      );
    case "connectedWeatherTemperature":
      return (
        <div className="CardContainer">
          <ConnectedWeatherCard />
          <ConnectedTemperatureCard />
        </div>
      );
    case "connectedLocationInput":
      return (
        <div className="CardContainer">
          <ConnectedLocationInputCard inputRef={inputRef} />
        </div>
      );
    case "connectedMenu":
      return (
        <div className="CardContainer">
          <ConnectedMenuCard />
        </div>
      );
    default:
      return (
        <div className="CardContainer">
        </div>
      );
  }
}

export default Card;
