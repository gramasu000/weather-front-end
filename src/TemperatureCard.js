import React, {Component} from "react";

class TemperatureCard extends Component {
    
    render() {
        
        return (
            <div className="Card" id="TemperatureCard">
                <div className="flex">
                    <div>
                        <h1 className="mt-1">{this.props.content.temp}</h1>
                    </div>
                    <div className="ml-4">
                        <h2>{this.props.content.tempmax}</h2>
                        <h2>{this.props.content.tempmin}</h2>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="TextCenter">
                        <p>Feels Like</p>
                    </div>
                    <div className="TextCenter">
                        <h1>{this.props.content.feellike}</h1>
                    </div>
                </div>
            </div>
        );

    }
}

export default TemperatureCard;
