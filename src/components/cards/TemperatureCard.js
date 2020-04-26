import React from "react";
import { connect } from "react-redux";

const mapStateToProps = function (state) {
  return {
    temp: state.temperature,
    tempmax: state.maxTemperature,
    tempmin: state.minTemperature,
    feellike: state.feelTemperature
  }
}

function TemperatureCard({temp, tempmax, tempmin, feellike}) {
  return (
      <div className="Card" id="TemperatureCard">
          <div className="flex">
              <div>
                  <h1 className="mt-1">{temp}</h1>
              </div>
              <div className="ml-4">
                  <h2>{tempmax}</h2>
                  <h2>{tempmin}</h2>
              </div>
          </div>
          <div className="mt-4">
              <div className="TextCenter">
                  <p>Feels Like</p>
              </div>
              <div className="TextCenter">
                  <h1>{feellike}</h1>
              </div>
          </div>
      </div>
  );
}

const ConnectedTemperatureCard = connect(mapStateToProps)(TemperatureCard);

export default ConnectedTemperatureCard;
