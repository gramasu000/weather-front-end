import React, {Component} from "react";

class TextCard extends Component {

    render() {
        if (this.props.weight === "h2") {
            return (
                <div class="Card">
                    <h2>{this.props.content.text}</h2>
                </div>
            );
        } else {
            return (
                <div class="Card">
                    <p>{this.props.content.text}</p>
                </div>
            );
        }
    }

}

export default TextCard;
