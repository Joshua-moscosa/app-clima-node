const axios = require('axios');
const colors = require('colors');
const weather = require('../weather/api');

const getLugar = async(direccion) => {
    const encodeURL = encodeURI(direccion);

    /* const instance = axios.create({
        baseURL: 'https://geocode.xyz/México?json=1',
        headers: {
            'token': '105427855802814e15777074x6844'
        }
    }); */

    try {
        const resp = await weather.getWeather(encodeURL);

        const data = resp.data;
        const city = data.name;
        const tem_max = data.main.temp_max;
        const tem_min = data.main.temp_min;
        const temp = data.main.temp;
        const humedad = data.main.humidity;
        const presion = data.main.pressure;

        console.log(`${ city } tiene una temperatura máxima de ${ tem_max }°C y una mínima de ${ tem_min }°C`.green);
        console.log(`Temperatura actual: ${ temp }°C`.yellow);
        console.log(`Humedad: ${ humedad }%`.yellow);
        console.log(`Presión: ${ presion } hPa`.yellow);

    } catch (error) {
        console.log('Lo siento, no encontramos información para tu país'.yellow);
    }
}

module.exports = {
    getLugar
}