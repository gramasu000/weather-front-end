import React, {Component} from "react";
import { connect } from "react-redux";
import "./Header.css";
import Icon from "./Icon.js";

const mapStateToProps = function(state) {
  return {
    name: state.name
  }
}

class Header extends Component {
    render() {
        return (
            <nav className="Header">
                <Icon />
                <h1>{this.props.name}</h1>
            </nav>
        );
    }
}

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;
