const request = require('request');

const forecast = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a1493d28f272683a47edcbac34c338aa&query='+ address +'';

     request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);

        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined);

        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is curently ' + body.current.temperature + ' °C degress out. There is a ' + body.current.precip + '% chance of rain');
        }
     })
}  

module.exports = forecast;
