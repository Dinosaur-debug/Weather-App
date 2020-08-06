const request = require('request')
const chalk = require('chalk')

const forecast = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a1493d28f272683a47edcbac34c338aa&query='+ address +''

     request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)

        } else if (response.body.error) {
            callback('Unable to find location. Try another search.', undefined)

        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is curently ' + response.body.current.temperature + ' °C degress out. There is a ' + response.body.current.precip + '% chance of rain')
        }
     })
}  

module.exports = forecast
