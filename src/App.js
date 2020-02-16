import React, {Component} from "react";
import Header from "./Header.js";
import {hot} from "react-hot-loader"; 
import "./App.css";

class App extends Component {
    
    render() {
        return (
            <Header name="OpenWeather" />
        );
    }
}

export default hot(module)(App);
