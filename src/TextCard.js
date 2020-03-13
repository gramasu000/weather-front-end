import React, {Component} from "react";

class TextCard extends Component {

    render() {
        if (this.props.weight === "h2") {
            return (
                <div className="Card">
                    <h2>{this.props.content.text}</h2>
                </div>
            );
        } else {
            return (
                <div className="Card">
                    <p>{this.props.content.text}</p>
                </div>
            );
        }
    }

}

export default TextCard;
