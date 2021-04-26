// Setup empty JS object to act as endpoint for all routes
const projectData = []
var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
const fetch = require('node-fetch');
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
  console.log('server running');
  console.log(`running on localhost: ${port}`);
}
const server = app.listen(port, listening);


// Initialize all route with a callback function
app.get('/all', sendData);

// Callback function to complete GET '/all'
function sendData(request, response) {
  // response.send(projectData);
}

// Post Route
const data = [];
app.post('/', function (request, response) {
  // data.push(request.body);
  // projectData['data'] = data;
  // response.send('POST recieved');
});

const location = {};
app.post('/addData', async (req, res) => {
  console.log('body', req.body)
  try{
      const response = await fetch (`${geonamesBaseUrl}?q=${req.body.city}&country=NG&username=${geonamesKey}`, {
          method: 'POST'
      })
      const data = await response.json();
      const cityData = {
        city: req.body.city,
        country: 'NG',
        countryInput: 'Nigeria',
        location: {
          latitude: data.geonames[0].lat,
          longitude: data.geonames[0].lng
        }
      }

      let city = cityData.city.toLowerCase();
      let country = cityData.countryInput.toLowerCase()
      console.log(city,country, ']]]]]]]]')
      // if (data.status.msg !== 'OK') {
      //     throw new Error(data.status.msg)
      // }
      // console.log(data, 'data');
      console.log('cityData', cityData)
      getWeather(cityData.location.latitude, cityData.location.longitude);
      getPicture(city, country )

      // res.send(data)
      projectData.push(cityData);
      console.log('projectData: ', projectData)
      res.send('POST recieved');
  }catch(error) {
      console.log(error, 'error', error.message)
      // res.status(500).send({ error: error.message});
  }
})

async function getWeather (lat, lng, city){
  try {
    const response = await fetch(`${weatherbitBaseUrl}?lat=${lat}&lon=${lng}&key=${weatherbitKey}`)
    const data = await response.json();
    console.log('successful call made')
    console.log('data', data);
    // return {latitude: data.geonames[0].lat, longitude: data.geonames[0].long}
    // return {temp: data.main.temp, feels: data.main.feels_like, country: data.name};
  } catch(error) {
    // throw new Error('Data unavailabe for that zipcode');
  }
}

async function getPicture (city, country){
  try {
    const response = await fetch(`${pixabayBaseUrl}?key=${pixabayKey}&q=${city}+${country}&category=travel`)
    const data = await response.json();
    console.log('get picture call made')
    console.log(response, pixabayKey, city, country, '>>>>>')
    console.log('data', data);
    // return {latitude: data.geonames[0].lat, longitude: data.geonames[0].long}
    // return {temp: data.main.temp, feels: data.main.feels_like, country: data.name};
  } catch(error) {
    // throw new Error('Data unavailabe for that zipcode');
  }
}


// https://pixabay.com/api/?key=21015412-05b2c00b712605e6f5cf7675b&q=lagos+nigeria&category=travel