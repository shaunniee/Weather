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
        days:7
      },
    });
  }
};
