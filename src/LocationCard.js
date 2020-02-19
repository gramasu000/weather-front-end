import React, {Component} from "react";

class LocationCard extends Component {

    render() {
        return (
            <div class="Card" id="LocationCard">
                <h2>{this.props.content.text}</h2>
            </div>
        );
    }

}

export default LocationCard;
