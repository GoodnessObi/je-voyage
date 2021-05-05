/* Function to GET Project Data */
function updateUI(res) {
  const wrapper = document.getElementById('card-wrapper')
  wrapper.innerHTML='';

  res.forEach((data) => {
    const card = document.createElement('div');
    card.className = ' card';
    card.id = data.id;

    const builtUI = buildUI(data);
    card.innerHTML = builtUI;
    wrapper.appendChild(card)
  })
  document.querySelectorAll('.view-weather').forEach(element => element.addEventListener('click', toggleDisplay))
}


function buildUI (data) {
  const cardDiv = document.createElement('div');
  
  const markup = 
    `<div class="image-wrapper">
      <img alt="placeholder" id="placeholder" src="${data.imageUrl}">
    </div>
    <div class="trip-details">
      <div>
        <h3>My trip to: <span class="city">${data.city}, </span><span class="">${data.countryInput}</span></h3>
        <p>Duration of trip: <span>${data.tripStart}</span> to <br> <span>${data.tripEnd}</span></p>
      </div>
      <div>
        <h4>Weather Forecast <a href="#" class="view-weather">Click to view</a></h4>
        <ul>
        ${data.weatherData.map(datum => (
          `<li class = "weather">
            <i><img src="https://www.weatherbit.io/static/img/icons/${datum.icon}.png"></i> <span class="date">${datum.validDate}:</span>
            <span> ${datum.weatherDescription}</span>
          </li>`
        )).join('')}
        </ul>
      </div>
    </div>
    <div class="countdown">
      <p class="countdown-text"></p>
    </div>
  `
  
  const builtUI = cardDiv.innerHTML = markup;
  countdownTimer(data.tripStart, data.id);
  
  return builtUI;
}

function clearInputFields() {
  document.getElementById('city').value = '';
  document.getElementById('autoComplete').value = '';
  document.getElementById('start').value = '';
  document.getElementById('end').value = '';
}

function toggleDisplay(e) {
  e.preventDefault();
  e.target.parentElement.nextElementSibling.classList.toggle("display-block");
}

function countdownTimer(startDate, id) {
  const countDownDate = new Date(startDate).getTime();
  const x = setInterval(function() {
    const countdownTarget = document.getElementById(id).lastElementChild.lastElementChild;
    // Get today's date and time
    const now = new Date().getTime();
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      countdownTarget.textContent = "Your trip is today!!!";
    } 
    countdownTarget.textContent = `Your trip is in ${days}d ${hours}h`;
  }, 1000);
}


export {
  clearInputFields,
  updateUI,
  buildUI,
  toggleDisplay
}