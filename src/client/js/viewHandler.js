// import e from "cors";

/* Function to GET Project Data */
function updateUI(res) {
  // e.preventDefault();
  console.log('time for an update',res)
  const wrapper = document.getElementById('card-wrapper')

  res.forEach((data) => {
    // console.log(data, ']]]]]');
    const card = document.createElement('div');
    card.className = ' card';

    const builtUI = buildUI(data);
    card.innerHTML = builtUI;
    wrapper.appendChild(card)
    console.log(card, 'final product');
  })
}

function buildUI (data) {
  console.log(data.weatherData, 'weather')
  const cardDiv = document.createElement('div');
  
  const markup = 
    `<div class="image-wrapper">
      <img alt="placeholder" id="placeholder" src="${data.imageUrl}">
    </div>
    <div class="trip-details">
      <div>
        <h4>My trip to: <span class="city">${data.city}, </span><span class="">${data.countryInput}</span></h4>
        <p>Duration of trip: <span>${data.tripStart}</span> to <br> <span>${data.tripEnd}</span></p>
      </div>
      <div>
        <h5>Weather Forecast <span class="view-weather">Click to view</span></h5>
        <ul>
        ${data.weatherData.map(datum => (
          `<li class = "weather">
            <i><img src="https://www.weatherbit.io/static/img/icons/${datum.icon}.png"></i> <span class="date">${datum.validDate}:</span>
            <span> ${datum.weatherDescription}</span>
          </li>`
        )).join('')}
        </ul>
      </div>
      <div class="row btn-wrapper">
        <button class="cancel">
          Remove
        </button>
      </div>
    </div>
    <div class="countdown">
      <p><span></span>
      <br> to your trip!</p>
    </div>
  `
  // console.log(ul);
  const builtUI = cardDiv.innerHTML = markup
  console.log(builtUI, '>>>>>')
  return builtUI;
}

function clearInputFields() {
  document.getElementById('zip').value = '';
  document.getElementById('feelings').value = '';
}

function clearRecentEntry() {
  document.getElementById('date').innerHTML = '';
  document.getElementById('location').innerHTML = '';
  document.getElementById('temp').innerHTML = '';
  document.getElementById('feels').innerHTML = '';
  document.getElementById('content').innerHTML = '';
  document.getElementById('error').innerHTML = '';
}


function toggleDisplay(e) {
  e.preventDefaault();
  document.querySelector('ul').classList.toggle("display-block");
}


export {
  clearInputFields,
  clearRecentEntry,
  updateUI,
  buildUI,
  toggleDisplay
}