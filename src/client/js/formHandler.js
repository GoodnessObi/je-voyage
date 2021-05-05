/* Function called by event listener */
function performAction (e){
  e.preventDefault();
  
  const countryInput = document.querySelector('.country').value;
  const city = document.getElementById('city').value.trim().toLowerCase()
  const formInput = {
    city,
    countryInput,
    country: Client.getCountryCode(countryInput),
    tripStart: document.getElementById('start').value,
    tripEnd: document.getElementById('end').value,
  }

  fetch(`http://localhost:8000/addData`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formInput),
  })
  .then(res => res.json())
  .then(function(res) {
      if (res.error) {
          throw new Error(res.error);
      }

      Client.updateUI(res);
      Client.clearInputFields();
  })
  .catch(error => {
      Client.handleError();
  })
}

function handleError() {
  const parent = document.getElementById('card-wrapper');
 
  const errorMarkup = 
  `<div id="error-wrapper" class="card">
  <p>Oops!!! Something went wrong</p>
  <p>We can't find the information you need</p>
  <p>Try again</p>
  </div>
  `
  parent.innerHTML= errorMarkup;
}

export { 
  performAction,
  handleError
 }