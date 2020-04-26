const initialState = {
  title: "OpenWeather",
  menuMode: false,
  locationInput: "",
  defaultID: 5128581,
  defaultCity: "New York",
  defaultCountry: "US",
  menuItems: [],
  selected: [],
  weatherIcon: "01d",
  weatherMain: "sunny",
  weatherDescription: "mostly sunny",
  temperature: "41°F",
  minTemperature: "38°F",
  maxTemperature: "44°F",
  feelTemperature: "40°F",
  message: "Fake Data",
};

export default function rootReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  } else {
    return state
  }
}
