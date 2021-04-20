// Personal API Key for OpenWeatherMap API
const apiKey = 'ebbd2f57d5cadca45a8ea3aa17c0b066';

/* Function called by event listener */
function performAction (){
  const zipCode = document.getElementById('zip').value;
  const feeling = document.getElementById('feelings').value;
  
  Client.clearRecentEntry();
  getWeather(apiKey, zipCode)
    .then(function(data) {
      return postData('/', {...data, feeling})
    })
    .then(function(){
      return Client.updateUI();
    }).then(function() {
      return Client.clearInputFields();
    })
    .catch(function(error) {
      document.getElementById('error').innerHTML = error.message;
    })
}

/* Function to GET Web API Data*/
async function getWeather (apiKey, zipCode){
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=imperial`)
    const data = await response.json();
    return {temp: data.main.temp, feels: data.main.feels_like, country: data.name};
  } catch(error) {
    throw new Error('Data unavailabe for that zipcode');
  }
}

/* Function to POST data */
async function postData ( url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
  });

  return response;
}
 
function getDate() {
  let d = new Date();
  let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();
  return newDate;
}

export {
  performAction,
  getWeather,
  postData,
  getDate
}