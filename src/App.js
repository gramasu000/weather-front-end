import React, {Component} from "react";
import Header from "./Header.js";
import Card from "./Card.js";
import appid from "./appid.js";
import {hot} from "react-hot-loader"; 
import "./App.css";

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "OpenWeather",
            location: {
                text: "New York, US"
            },
            weather: {
                weather: {
                    icon: "01d",
                    main: "sunny",
                    description: "mostly sunny"
                },
                temperature: {
                    temp: "41°F",
                    tempmin: "38°F",
                    tempmax: "44°F",
                    feellike: "40°F"
                }
            },
            message: {
                text: "Fake Data"
            },
        }
        setInterval(this.updateWeather.bind(this), 60*1000);
        this.updateWeather();
    }

    getTempText(kelvin) {
        let fahrenheit = 9*((kelvin - 272.15)/5) + 32;
        fahrenheit = Math.round(fahrenheit);
        return `${fahrenheit}°F`;
    }

    getDateTime(dt) {
        let date = new Date(dt*1000);
        return date.toString();
    }

    convertDataToState(data) {
        return {
            name: "OpenWeather",
            location: {
                text: `${data.name}, ${data.sys.country}`,
            },
            weather: {
                weather: {
                    icon: data.weather[0].icon,
                    main: data.weather[0].main,
                    description: data.weather[0].description,
                },
                temperature: {
                    temp: this.getTempText(data.main.temp),
                    tempmin: this.getTempText(data.main.temp_min),
                    tempmax: this.getTempText(data.main.temp_max),
                    feellike: this.getTempText(data.main.feels_like)
                }
            },
            message: {
                text: this.getDateTime(data.dt) 
            },
        }
    }

    updateWeather() {
        let url = `https://api.openweathermap.org/data/2.5/weather?id=5128581&appid=${appid}`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let state = this.convertDataToState(data);
                this.setState(state);
            })
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
