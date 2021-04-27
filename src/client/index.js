import { performAction } from './js/formHandler';
import { clearRecentEntry } from './js/viewHandler';
import { clearInputFields } from './js/viewHandler';
import { getDate } from './js/formHandler';
import { getWeather } from './js/formHandler';
import { postData } from './js/formHandler';
import { updateUI } from './js/viewHandler';
import { getCountryCode } from './js/countryHandler';

import './styles/base.scss';
import './styles/error.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/resets.scss';
import './styles/card.scss';
import './styles/_variables.scss';

import logo from './media/logo.png';
import placeholder from './media/placeholder.png'
import sunnyIcon from './media/icons/weather-sunny.svg' 
import rainyIcon from './media/icons/weather-rainy.svg'
import partlyCloudy from './media/icons/weather-partly-cloudy.svg'


document.getElementById('logo').src = logo;
document.getElementById('placeholder').src = placeholder;
document.getElementById('sunny').src = sunnyIcon;
document.getElementById('snowy').src = rainyIcon;
document.getElementById('windy').src = partlyCloudy;

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);



export {
  performAction,
  clearRecentEntry,
  clearInputFields,
  updateUI,
  getDate,
  getWeather,
  postData,
  getCountryCode
}