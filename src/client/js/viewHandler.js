/* Function to GET Project Data */
async function updateUI() {
  const response = await fetch('/all');
  try {
      const newData = await response.json();
      const dataArray = newData.data
      const recentEntry = dataArray.pop();
      const date = Client.getDate();

      document.getElementById('date').innerHTML = date;
      document.getElementById('location').innerHTML = recentEntry.country;
      document.getElementById('temp').innerHTML = recentEntry.temp;
      document.getElementById('feels').innerHTML = recentEntry.feels;
      document.getElementById('content').innerHTML = recentEntry.feeling;
      
  } catch(error) {
      console.log('error', error);
  }
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
  updateUI
}