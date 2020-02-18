import React, {Component} from "react";
import "./LocationCard.css"

class LocationCard extends Component {

    render() {
        return (
            <div class="LocationCard">
                <h1>{this.props.content.text}</h1>
            </div>
        );
    }

}

export default LocationCard;
