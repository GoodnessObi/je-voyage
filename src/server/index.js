// Setup empty JS object to act as endpoint for all routes
const projectData = {}
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
const geonamesKey = process.env.GEONAMES_API_KEY;
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
  response.send(projectData);
}

// Post Route
const data = [];
app.post('/', function (request, response) {
  data.push(request.body);
  projectData['data'] = data;
  response.send('POST recieved');
});

app.post('/addData', async (req, res) => {
  console.log('body', req.body)
  try{
      const response = await fetch (`${geonamesBaseUrl}?q=${req.body.city}&country=NG&username=${geonamesKey}`, {
          method: 'POST'
      })
      const data = await response.json();
      // if (data.status.msg !== 'OK') {
      //     throw new Error(data.status.msg)
      // }
      // console.log(data, 'data');
      console.log('result: ', data.geonames[0].lat, data.geonames[0].lng)
      res.send(data)
  }catch(error) {
      console.log(error, 'error', error.message)
      res.status(500).send({ error: error.message});
  }
})