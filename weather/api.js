const axios = require('axios').default;

const api_key = 'Your api key xxxxxxxxx';

const getWeather = (city) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ api_key }&units=metric`);
}

module.exports = {
    getWeather
}