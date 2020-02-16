import React, {Component} from "react";
import "./Header.css"

class Header extends Component {

    render() {
        return (
            <nav class="Header">
                <h1>{this.props.name}</h1>
            </nav>
        );
    }
}

export default Header;
