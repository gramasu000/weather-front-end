const initialState = {
  title: "OpenWeather",
  menuMode: true,
  locationInput: "Test",
  defaultID: 5128581,
  defaultCity: "New York",
  defaultCountry: "US",
  menuItems: [
    {
      id: 1,
      city: "London",
      country: "UK"
    },
    {
      id: 2,
      city: "New York",
      country: "US"
    },
    {
      id: 2,
      city: "New York",
      country: "US"
    },
    {
      id: 2,
      city: "New York",
      country: "US"
    },
    {
      id: 2,
      city: "New York",
      country: "US"
    },
    {
      id: 2,
      city: "New York",
      country: "US"
    },
    {
      id: 2,
      city: "New York",
      country: "US"
    },
    {
      id: 2,
      city: "New York",
      country: "US"
    },
  ],
  selected: [2],
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
