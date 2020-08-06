const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2]

if (!address) {
    console.log(chalk.redBright('Please provide an adress'))
} else {
    geocode(address, (error, { location }) => {
        if (error) {
            return console.log(chalk.redBright(error))
        }

        forecast(location, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        });
    });

}
