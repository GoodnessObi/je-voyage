// Setup empty JS object to act as endpoint for all routes
const projectData = []
var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const { v4: uuidv4 } = require('uuid');
dotenv.config();
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
const geonamesBaseUrl ='http://api.geonames.org/searchJSON';
const weatherbitBaseUrl = 'http://api.weatherbit.io/v2.0/forecast/daily';
const pixabayBaseUrl = 'https://pixabay.com/api/';
const geonamesKey = process.env.GEONAMES_API_KEY;
const weatherbitKey = process.env.WEATHERBIT_API_KEY;
const pixabayKey = process.env.PIXABAY_API_KEY;
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'));

// Spin up the server
const port = process.env.PORT || 8000;
// Callback to debug
const listening = () => {
  console.log(`running on localhost: ${port}`);
}
const server = app.listen(port, listening);


// Initialize all route with a callback function
app.get('/all', sendData);

// Callback function to complete GET '/all'
function sendData(request, response) {
  response.send(projectData);
}

app.post('/addData', async (req, res) => {
  let { city, country, countryInput, tripStart, tripEnd } = req.body;

  tripStart = new Date(tripStart);
  tripEnd = new Date(tripEnd);
  try{
      const response = await fetch (`${geonamesBaseUrl}?q=${city}&country=${country}&username=${geonamesKey}`, {
          method: 'POST'
      })
      const data = await response.json();
      const latitude = data.geonames[0].lat;
      const longitude = data.geonames[0].lng;
      const cityData = {
        city,
        country,
        countryInput,
        location: {
          latitude,
          longitude
        },
        tripStart: tripStart.toDateString(),
        tripEnd: tripEnd.toDateString(),
        id: uuidv4()
      }

      countryInput = countryInput.toLowerCase()

      const weatherData = await getWeather(latitude, longitude, tripStart, tripEnd);
      const imageUrl = await getPicture(city, countryInput )

      cityData.imageUrl = imageUrl || '';
      cityData.weatherData = weatherData;
    
      projectData.push(cityData);
      console.log('projectData', projectData);
      res.send(projectData);
  }catch(error) {
      // console.log(error, 'error', error.message)
      res.status(500).send({ error: error.message});
  }
})

async function getWeather (lat, lng, tripStart, tripEnd){
  try {
    const response = await fetch(`${weatherbitBaseUrl}?lat=${lat}&lon=${lng}&key=${weatherbitKey}`)
    const data = await response.json();

    const filteredData = data.data.filter(item => {
      const validDate = new Date(item.valid_date);
      if (item.valid_date === '2021-05-07');
      return validDate >= tripStart && validDate <= tripEnd;
    });

    const weatherPerDay = filteredData.map(dataItem => ({
      validDate: dataItem.valid_date,
      pop: dataItem.pop, 
      snow: dataItem.snow, 
      temp: dataItem.temp, 
      weatherDescription: dataItem.weather.description,
      icon: dataItem.weather.icon
    }));

    return weatherPerDay;
  } catch(error) {
    throw new Error('Data unavailabe for that zipcode');
  }
}

async function getPicture (city, country) {
  try {
    const response = await fetch(`${pixabayBaseUrl}?key=${pixabayKey}&q=${city}+${country}&category=travel`)
    const data = await response.json();
    return data.hits[0].webformatURL;
  } catch(error) {
    throw new Error('Data unavailabe for that zipcode');
  }
}

// // Initialize all route with a callback function
// app.get('/all', sendData);

// // Callback function to complete GET '/all'
// function sendData(request, response) {
//   response.send(projectData);
// }
