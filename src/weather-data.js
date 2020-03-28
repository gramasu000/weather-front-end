import appid from "./appid.js";

export function getDefaultState() {
  return {
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
    }
  }
}

function getTempTextInFahrenheit(kelvin) {
  let fahrenheit = 9*((kelvin - 272.15)/5) + 32;
  fahrenheit = Math.round(fahrenheit);
  return `${fahrenheit}°F`;
}

function getDateTime(dt) {
  let date = new Date(dt*1000);
  return date.toString();
}


function convertDataToState(data) {
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
        temp: getTempTextInFahrenheit(data.main.temp),
        tempmin: getTempTextInFahrenheit(data.main.temp_min),
        tempmax: getTempTextInFahrenheit(data.main.temp_max),
        feellike: getTempTextInFahrenheit(data.main.feels_like)
      }
    },
    message: {
      text: getDateTime(data.dt) 
    },
  }
}

 
export function updateWeather(app) {
  let url = `https://api.openweathermap.org/data/2.5/weather?id=5128581&appid=${appid}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let state = convertDataToState(data);
      app.setState(state);
      console.log("Updated Weather Data");
    })
}
