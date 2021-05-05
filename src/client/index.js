import { performAction } from './js/formHandler';
import { clearRecentEntry } from './js/viewHandler';
import { clearInputFields } from './js/viewHandler';
import { buildUI } from './js/viewHandler';
import { getDate } from './js/formHandler';
import { postData } from './js/formHandler';
import { updateUI } from './js/viewHandler';
import { getCountryCode } from './js/countryHandler';
import { toggleDisplay } from './js/viewHandler';

import './styles/base.scss';

import './media/background.png';

import logo from './media/logo.png';

document.getElementById('footer-logo').src = logo;


// Event listener to add function to existing HTML DOM element
document.getElementById('submit').addEventListener('click', performAction);



export {
  performAction,
  clearRecentEntry,
  clearInputFields,
  updateUI,
  getDate,
  buildUI,
  postData,
  getCountryCode
}