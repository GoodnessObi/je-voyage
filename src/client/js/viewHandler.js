/* Function to GET Project Data */
function updateUI(res) {
  // e.preventDefault();
  console.log('time for an update',res)
  const wrapper = document.getElementById('card-wrapper')

  res.forEach((data) => {
    console.log(data, ']]]]]');
    const card = document.createElement('div').className = 'card';
    const builtUI = buildUI(data);
   
    card.appendChild(builtUI);
    wrapper.appendChild(card)
  })
  
}

function weatherUI (weatherData) {
  const ul = document.createElement('ul');
  weatherData.forEach((datum)=> {
    const markupUI = 
      `<li class = "weather">
        <i></i> <span class="date">${datum.validDate}:</span>
        <span>${datum.weatherDescription}</span>
      </li>`
      ul.appendChild(markupUI);
  })
  return ul;
}

function buttonUI () {
  markupButton = 
  `<div class="row">
    <button class="cancel">
      Remove
    </button>
    <button>
      Add New Trip
    </button>
  </div>
  `
  return markupButton;
}

function buildUI (data) {
  const ul = weatherUI(data.weatherData);
  const buttons = buttonUI();
  const cardFragment = document.createDocumentFragment();
  const markup = 
    `<div class="image-wrapper">
      <img alt="placeholder" id="placeholder" src="${data.imageURL}">
    </div>
    <div class="trip-details">
      <div>
        <h4>My trip to: <span class="">${data.city}, </span><span class="">${data.countryInput}</span></h4>
        <p>Duration of trip: <span>${data.startTrip}</span> to <br> <span>${data.endTrip}</span></p>
        <p><a href="">view weather forecast</a></p>
      </div>
    </div>
    `
    console.log(markup, 'mk')
  const builtUI = cardFragment.appendChild(markup);
  // .appendChild(ul).appendChild(buttons)
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

export {
  clearInputFields,
  clearRecentEntry,
  updateUI,
  weatherUI,
  buildUI,
  buttonUI
}