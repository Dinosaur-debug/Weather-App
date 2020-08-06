const chalk = require('chalk');
const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('City Name', (error, data) => {
    console.log(chalk.redBright('Error:'), error);
    console.log(chalk.greenBright('Data:'), data);

    forecast(data.location, (error, data) => {
        console.log(chalk.redBright('Error:'), error);
        console.log(chalk.greenBright('Data:'), data);
    });
});
