# le-voyageur
Project #5 for the Udacity Frontend Web Developer nanodegree - FEND Capstone Travel App
## Introduction
A Travel Planning Application that takes in the city, country, start and end dates of your trip and returns the picture of the location, the weather forecast for each day of the trip, and does a countdown to your departure date.

It consumes infromation from the following APIs:
* [Geonames](http://www.geonames.org/) - This API takes in the city and country and returns the location's latitude and longitude
* [Weatherbit](https://www.weatherbit.io/) - This API takes in the latitude, longitude, the start-date and end-date and returns the weather information and corresponding icon if trip is within 16days
* [Pixabay](https://pixabay.com/) - This API returns a picture of the loction taking in the city and country
## Deployed App
Click [here](https://le-voyageur.herokuapp.com/) to view the deployed app
## Usage
Put in a valid input needed and click on the Add-trip button.
## Dependencies
The following depencies are required by the app during developmment
### Development Dependencies
* [@babel/core](https://www.npmjs.com/package/@babel/core)
* [@babel/preset-env](https://www.npmjs.com/package/@babel/core)
* [babel-loader](https://www.npmjs.com/package/@babel/core)
* [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)
* [css-loader](https://www.npmjs.com/package/css-loader)
* [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)
* [jest](https://jestjs.io/)
* [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)
* [node-sass](https://www.npmjs.com/package/node-sass)
* [optimize-css-assets-webpack-plugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)
* [sass-loader](https://www.npmjs.com/package/sass-loader)
* [style-loader](https://www.npmjs.com/package/style-loader)
* [terser-webpack-plugin](https://www.npmjs.com/package/terser-webpack-plugin)
* [url-loader](https://www.npmjs.com/package/url-loader)
* [webpack](https://www.npmjs.com/package/webpack)
* [webpack-cli](https://www.npmjs.com/package/webpack-cli)
* [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)
* [workbox-webpack-plugin](https://www.npmjs.com/package/workbox-webpack-plugin)
### Dependencies
* [@tarekraafat/autocomplete.js](https://tarekraafat.github.io/autoComplete.js/#/)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [cors](https://www.npmjs.com/package/cors)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [express](https://expressjs.com/)
* [node-fetch](https://www.npmjs.com/package/node-fetch)

## Installation and Setup
Ensure you have [node](https://nodejs.org/en/) installed on your local device

* Fork the repository to create a version on your account
* Clone the repository 
```
//locally
git clone https://github.com/<Your Github Username>/le-voyageur.git
```
* Create a `.env` file in the project root and input your API key
```
GEONAMES_API_KEY=***...
WEATHERBIT_API_KEY=***...
PIXABAY_API_KEY=***...
```
* Install the node packages
```
npm install
```
* Inspect the `package.json` to see the available scripts
  * To run dev - Runs on `http://localhost:8080/` 
  ```
  npm run build-dev
  ```
  * To run prod - Runs on `http://localhost:8081/`
  ```
  npm run build
  npm start
  ```
  * To run test 
  ```
  npm run test
  ````
## Planned Updates
* Add end date and display length of trip.
* Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
* Allow user to add multiple destinations on the same trip.
* Pull in weather for additional locations.
* Allow the user to add hotel and/or flight data.
* Multiple places to stay? Multiple flights?
* Integrate the REST Countries API to pull in data for the country being visited.
* Allow the user to remove the trip.
* Use Local Storage to save the data so that when they close, then revisit the page, their information is still there.
* Instead of just pulling a single day forecast, pull the forecast for multiple days.
* Incorporate icons into forecast.
* Allow user to Print their trip and/or export to PDF.
* Allow the user to add a todo list and/or packing list for their trip.
* Allow the user to add additional trips (this may take some heavy reworking, but is worth the challenge).
  * Automatically sort additional trips by countdown.
  * Move expired trips to bottom/have their style change so it’s clear it’s expired.
## License
[MIT](https://choosealicense.com/licenses/mit/)

