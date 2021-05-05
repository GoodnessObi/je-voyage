/* Function called by event listener */
function performAction (e){
  e.preventDefault();
  console.log('In here!!!')

  const countryInput = document.querySelector('.country').value;
  const city = document.getElementById('city').value.trim().toLowerCase()
  const formInput = {
    city,
    countryInput,
    country: Client.getCountryCode(countryInput),
    tripStart: document.getElementById('start').value,
    tripEnd: document.getElementById('end').value,
  }

  console.log("::: Form Submitted :::", formInput) 
  fetch(`http://localhost:8000/addData`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formInput),
  })
  .then(res => res.json())
  .then(function(res) {
      console.log('Yo!!!!')
      if (res.error) {
          throw new Error(res.error);
      }

      Client.updateUI(res);
      
      // Client.clearUI();
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

export {
  performAction,
  postData
}