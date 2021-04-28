/* Function to GET Project Data */
function updateUI(data) {
  console.log('time for an update',data)
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