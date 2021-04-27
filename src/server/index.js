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
  let { city, country, countryInput, startDate, endDate } = req.body;

  country = 'NG';
  countryInput = 'Nigeria';
  startDate = new Date('2021-05-01');
  endDate = new Date('2021-05-07');
  try{
      const response = await fetch (`${geonamesBaseUrl}?q=${city}&country=${country}&username=${geonamesKey}`, {
          method: 'POST'
      })
      const data = await response.json();
      const cityData = {
        city,
        country,
        countryInput,
        location: {
          latitude: data.geonames[0].lat,
          longitude: data.geonames[0].lng
        }
      }

      city = city.toLowerCase();
      countryInput = countryInput.toLowerCase()
      console.log(city,countryInput, ']]]]]]]]')
  
      console.log('cityData', cityData)
      const weatherData = await getWeather(cityData.location.latitude, cityData.location.longitude, new Date(startDate), new Date(endDate));
      const imageUrl = await getPicture(city, countryInput )

      console.log(weatherData, imageUrl, '>>>>>>>>>>>')
      // res.send(data)
      projectData.push(cityData);
      console.log('projectData: ', projectData)
      res.send('POST recieved');
  }catch(error) {
      console.log(error, 'error', error.message)
      res.status(500).send({ error: error.message});
  }
})

async function getWeather (lat, lng, startDate, endDate){
  try {
    const response = await fetch(`${weatherbitBaseUrl}?lat=${lat}&lon=${lng}&key=${weatherbitKey}`)
    const data = await response.json();
    console.log('successful call made', endDate)

    return data.data.filter(item => {
      const validDate = new Date(item.valid_date);
      if (item.valid_date === '2021-05-07') console.log(validDate, startDate, endDate, 'LLLLLLLLLLLLLLLL')
      return validDate >= startDate && validDate <= endDate;
    });
  } catch(error) {
    throw new Error('Data unavailabe for that zipcode');
  }
}

async function getPicture (city, country) {
  try {
    const response = await fetch(`${pixabayBaseUrl}?key=${pixabayKey}&q=${city}+${country}&category=travel`)
    const data = await response.json();
    console.log('get picture call made')
  } catch(error) {
    throw new Error('Data unavailabe for that zipcode');
  }
}
