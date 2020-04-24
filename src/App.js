import React, {Component} from "react";
import { connect } from "react-redux";
import ConnectedHeader from "./Header.js";
import Card from "./Card.js";
import {hot} from "react-hot-loader"; 
import "./App.css";

const EVERY_MINUTE = 60*1000

const mapStateToProps = function(state) {
  return {
    menuMode: state.menuMode
  }
}

class App extends Component { 
  render() {
    if (this.props.menuMode) {
      return;
    } else {
      return (
        <div id="App">
          <ConnectedHeader />
          <div id="Contents">
            <Card type="weather" />
          </div>
        </div>
      );
    }
  }
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;

//<Card type="text" />
//<Card type="location" />
