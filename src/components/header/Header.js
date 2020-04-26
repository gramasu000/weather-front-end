import React from "react";
import { connect } from "react-redux";
import "./Header.css";
import Icon from "../icons/Icon.js";

const mapStateToProps = function(state) {
  return {
    title: state.title
  }
}

function Header({title}) {
  return (
      <nav className="Header">
          <Icon />
          <h1>{title}</h1>
      </nav>
  );
}

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;
