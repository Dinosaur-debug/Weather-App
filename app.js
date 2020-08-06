const chalk = require('chalk');
const request = require('request')
const geocode = require('Location of the geocode file')
const forecast = require('Location of the forecast file')


geocode('Name of your city', (error, data) => {
    console.log(chalk.redBright('Error:'), error)
    console.log(chalk.greenBright('Data:'), data)
})


forecast('Name of you city', (error, data) => {
  console.log(chalk.redBright('Error:'), error)
  console.log(chalk.greenBright('Data:'), data)
})
