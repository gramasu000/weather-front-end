import React, {Component} from "react";
import { connect } from "react-redux";

const mapStateToProps = function (state) {
  return {
    temp: state.temperature,
    tempmax: state.maxTemperature,
    tempmin: state.minTemperature,
    feellike: state.feelTemperature
  }
}

class TemperatureCard extends Component {
    
    render() {
        
        return (
            <div className="Card" id="TemperatureCard">
                <div className="flex">
                    <div>
                        <h1 className="mt-1">{this.props.temp}</h1>
                    </div>
                    <div className="ml-4">
                        <h2>{this.props.tempmax}</h2>
                        <h2>{this.props.tempmin}</h2>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="TextCenter">
                        <p>Feels Like</p>
                    </div>
                    <div className="TextCenter">
                        <h1>{this.props.feellike}</h1>
                    </div>
                </div>
            </div>
        );

    }
}

const ConnectedTemperatureCard = connect(mapStateToProps)(TemperatureCard);

export default ConnectedTemperatureCard;
