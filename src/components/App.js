import React, {Component} from "react";
import { connect } from "react-redux";
import ConnectedHeader from "./header/Header.js";
import Card from "./cards/Card.js";
//import {hot} from "react-hot-loader"; 
import "./App.css";

const EVERY_MINUTE = 60*1000

const mapStateToProps = function(state) {
  return {
    menuMode: state.menuMode
  }
}

class App extends Component { 

  constructor(props) {
    super(props);
    this.locationInputRef = React.createRef();
  }

  focus() {
    if (this.props.menuMode) {
      this.locationInputRef.current.focus();
    }
  }

  componentDidMount() {
    this.focus();
  }

  componentDidUpdate() {
    this.focus();
  }

  render() {
    if (this.props.menuMode) {
      return (
        <div id="App">
          <ConnectedHeader />
          <div id="Contents">
            <Card type="connectedLocationInput" inputRef={this.locationInputRef} />
            <Card type="connectedMenu" />
          </div>
        </div>
      );
    } else {
      return (
        <div id="App">
          <ConnectedHeader />
          <div id="Contents">
            <Card type="connectedLocation" />
            <Card type="connectedWeatherTemperature" />
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
