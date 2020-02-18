import React, {Component} from "react";
import Header from "./Header.js";
import Card from "./Card.js"
import {hot} from "react-hot-loader"; 
import "./App.css";

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "OpenWeather",
            location: {
                text: "New York City, USA"
            },
            weather: {
                icon: "01d",
                main: "sunny",
                description: "mostly sunny",
                temp: "41°F",
                tempmin: "38°F",
                tempmax: "44°F",
                feellike: "40°F"
            }
        }
    }

    render() {
        return (
            <div id="App">
                <Header name={this.state.name} />
                <div id="Contents">
                    <Card type="location" content={this.state.location} />
                    <Card type="weather" content={this.state.weather} />
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
