import axios from "axios";
export default {
  getData: (query) =>
    {return axios({
      method: "GET",
      url: process.env.REACT_APP_WEATHER_API_URL,
      headers: {
        "content-type": "application/octet-stream",
        'access-control-allow-origin': '*'
      },
      params: {
        key: process.env.REACT_APP_WEATHER_API_KEY,
        q: query,
        aqi:'yes'
      },
    })},
  searchData: (query) => {
    return axios({
      method: "GET",
      url: process.env.REACT_APP_WEATHER_API_URL_SEARCH,
      headers: {
        "content-type": "application/octet-stream",
        'access-control-allow-origin': '*'
      },
      params: {
        key: process.env.REACT_APP_WEATHER_API_KEY,
        q: query,
        aqi:'yes'
      },
    });
  },
  astroData: (query) => {
    return axios({
      method: "GET",
      url: process.env.REACT_APP_WEATHER_API_URL_ASTRO,
      headers: {
        "content-type": "application/octet-stream",
        'access-control-allow-origin': '*'
      },
      params: {
        key: process.env.REACT_APP_WEATHER_API_KEY,
        q: query,
        aqi:'yes'
      },
    });
  },
  forecastData: (query) => {
    return axios({
      method: "GET",
      url: process.env.REACT_APP_WEATHER_API_URL_FORECAST,
      headers: {
        "content-type": "application/octet-stream",
        'access-control-allow-origin': '*'
      },
      params: {
        key: process.env.REACT_APP_WEATHER_API_KEY,
        q: query,
        days:7,
        aqi:'yes'
      },
    });
  }
};
