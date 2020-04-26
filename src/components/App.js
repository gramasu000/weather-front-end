import React, {Component} from "react";
import { connect } from "react-redux";
import ConnectedHeader from "./header/Header.js";
//import Card from "./Card.js";
//import {hot} from "react-hot-loader"; 
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
      return (
        <div id="App">
          <ConnectedHeader />
          <div id="Contents">
            <Card type="connectedLocationInput" />
            <Card type="connectedMenu" />
          </div>
        </div>
      );
    } else {
      return (
        <div id="App">
          <ConnectedHeader />
        </div>
      );
    }
  }
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;

//<Card type="text" />
//<Card type="location" />
//<div id="Contents">
//<Card type="connectedLocation" />
//<Card type="connectedWeather" />
//</div>
