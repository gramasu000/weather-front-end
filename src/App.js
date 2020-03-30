import React, {Component} from "react";
import Header from "./Header.js";
import Card from "./Card.js";
import * as WeatherData from "./weather-data.js"; 
import {hot} from "react-hot-loader"; 
import "./App.css";

const EVERY_MINUTE = 60*1000

class App extends Component {

  constructor(props) {
    super(props);
    this.state = WeatherData.getDefaultState();
    setInterval(WeatherData.updateWeather.bind(WeatherData, this), EVERY_MINUTE);
    WeatherData.updateWeather(this);
  }
  
    render() {
      return (
        <div id="App">
          <Header name={this.state.name} />
          <div id="Contents">
            <Card type="location" content={this.state.location} />
            <Card type="weather" content={this.state.weather} />
            <Card type="text" content={this.state.message} />
          </div>
        </div>
      );
    }
}

export default hot(module)(App);
