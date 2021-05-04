// API Advanced Configuration Object
const autoComplete = {
  selector: "#autoComplete",
  placeHolder: "Country",
  data: {
      src: ["Sauce - Thousand Island", "Wild Boar - Tenderloin", "Goat - Whole Cut"]
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
  }
}
