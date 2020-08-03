const chalk = require('chalk');
const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=a1493d28f272683a47edcbac34c338aa&query=Guayaquil'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log(chalk.inverse.redBright('Unable to connect to weather service!'))

    } else if (response.body.error) {
        console.log(chalk.inverse.redBright('Unable to find location of weather service!'))

    } else {
        const data = response.body.current
        console.log(data.weather_descriptions[0] + '. It is curently ' + data.temperature + ' °C degress out. There is a ' + data.precip + '% chance of rain' )

    }
})


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Guayaquil.json?access_token=pk.eyJ1IjoiZGlub3NhdXJpb2pzIiwiYSI6ImNrZGM5ZW9hYTQyN2UydXF5dzBwcmtjdDQifQ.YgWQUHqHjRgnSE0dOuR9XA&limit=1'
 
request({ url: geocodeURL, json: true }, (error, response) => {
    const location = response.body.current

    if (error) {
        console.log(chalk.inverse.redBright('Unable to connect to geocoding service!'))

    } else if (!location) {
        console.log(chalk.inverse.redBright('Unable to find location of geocoding service!'))

    } else {
        const lat = response.body.features[0].center[1]
        const long = response.body.features[0].center[0]
        console.log(lat, long)

    }

}) 
