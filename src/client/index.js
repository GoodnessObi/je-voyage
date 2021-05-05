import autoComplete from "@tarekraafat/autocomplete.js";
import { performAction } from './js/formHandler';
import { postData } from './js/formHandler';
import { clearRecentEntry } from './js/viewHandler';
import { clearInputFields } from './js/viewHandler';
import { buildUI } from './js/viewHandler';
import { updateUI } from './js/viewHandler';
import { getCountryCode, getCountryNames } from './js/countryHandler';
import { toggleDisplay } from './js/viewHandler';

import './styles/base.scss';

import './media/background.png';
import logo from './media/logo.png';

document.getElementById('footer-logo').src = logo;

new autoComplete({
  selector: "#autoComplete",
  placeHolder: "Start typing...",
  data: {
      src: getCountryNames()
  },
  resultsList: {
      noResults: (list, query) => {
          // Create "No Results" message list element
          const message = document.createElement("li");
          message.setAttribute("class", "no_result");
          // Add message text content
          message.innerHTML = `<span>Found No Results for "${query}"</span>`;
          // Add message list element to the list
          list.appendChild(message);
      },
  },
  resultItem: {
      highlight: {
          render: true
      }
  },
  onSelection: (feedback) => {
    console.log(feedback.selection.value);
    document.getElementById('autoComplete').value = feedback.selection.value;
  }
});

// Event listener to add function to existing HTML DOM element
document.getElementById('submit').addEventListener('click', performAction);



export {
  autoComplete,
  performAction,
  clearRecentEntry,
  clearInputFields,
  updateUI,
  buildUI,
  postData,
  getCountryCode,
  toggleDisplay,
}