// Personal API Key for OpenWeatherMap API
// const apiKey = 'ebbd2f57d5cadca45a8ea3aa17c0b066';

/* Function called by event listener */
function performAction (){
  // const city = document.getElementById('city').value;
  const formInput = {
    city: document.getElementById('city').value,
    country: Client.getCountryCode(countryInput);
    countryInput: document.getElementById('country').value,
    tripStart: document.getElementById('start').value,
    tripEnd: document.getElementById('end').value,
  }

  console.log("::: Form Submitted :::", formInput) 
  fetch(`http://localhost:8000/addData`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ city }),
  })
  .then(res => res.json())
  .then(function(res) {
      console.log(res)
      if (res.error) {
          throw new Error(res.error);
      }
      
      Client.clearUI();
      // document.getElementById('name').value = '';
      // document.querySelector('.results').classList.add("fadeIn");
      // document.getElementById('url').innerHTML = formText;
      // document.getElementById('confidence').innerHTML = res.confidence.toLowerCase();
      // document.getElementById('agreement').innerHTML = res.agreement.toLowerCase();
      // document.getElementById('irony').innerHTML = res.irony.toLowerCase();
      // document.getElementById('subjective').innerHTML = res.subjectivity.toLowerCase();
  })
  .catch(error => {
      console.log(error)
      // Client.clearUI();
      // document.querySelector('#error').classList.add("fadeIn");
  })
  
  // Client.clearRecentEntry();
  // getWeather(apiKey, zipCode)
  //   .then(function(data) {
  //     return postData('/', {...data, feeling})
  //   })
  //   .then(function(){
  //     return Client.updateUI();
  //   }).then(function() {
  //     return Client.clearInputFields();
  //   })
  //   .catch(function(error) {
  //     document.getElementById('error').innerHTML = error.message;
    // })
}

/* Function to GET Web API Data*/
async function getWeather (){
  // try {
  //   const response = await fetch('http://api.geonames.org/searchJSON?q=Lagos&country=PT&username=goodness')
  //   const data = await response.json();
  //   console.log('successful call made')
  //   console.log('country:' + data.geonames[0].countryName + ', latitude:' + data.geonames[0].lat + ', longitude:' + data.geonames[0].lng)
  //   return {latitude: data.geonames[0].lat, longitude: data.geonames[0].long}
  //   // return {temp: data.main.temp, feels: data.main.feels_like, country: data.name};
  // } catch(error) {
  //   // throw new Error('Data unavailabe for that zipcode');
  // }
}

/* Function to POST data */
async function postData ( url = '', data = {}) {
  // const response = await fetch(url, {
  //   method: 'POST', 
  //   credentials: 'same-origin',
  //   headers: {
  //       'Content-Type': 'application/json',
  //   },
  //   // Body data type must match "Content-Type" header        
  //   body: JSON.stringify(data), 
  // });

  // return response;
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