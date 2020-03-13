import React, {Component} from "react";
import "./Header.css";
import Icon from "./Icon.js";

class Header extends Component {

    render() {
        return (
            <nav class="Header">
                <Icon />
                <h1>{this.props.name}</h1>
            </nav>
        );
    }
}

export default Header;
