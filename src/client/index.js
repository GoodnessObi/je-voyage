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
import './styles/result.scss';

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