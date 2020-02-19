import React, {Component} from "react";

class TemperatureCard extends Component {
    
    render() {
        
        return (
            <div class="Card" id="TemperatureCard">
                <div class="flex">
                    <div>
                        <h1>{this.props.content.temp}</h1>
                    </div>
                    <div class="ml-4">
                        <h3>{this.props.content.tempmax}</h3>
                        <h3>{this.props.content.tempmin}</h3>
                    </div>
                </div>
                <div class="mt-4">
                    <div class="TextCenter">
                        <p>Feels Like</p>
                    </div>
                    <div class="TextCenter">
                        <h1>{this.props.content.feellike}</h1>
                    </div>
                </div>
            </div>
        );

    }
}

export default TemperatureCard;
