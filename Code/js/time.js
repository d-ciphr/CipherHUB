// time.js
function updateESTTime() {
  var options = { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' };
  var estTime = new Date().toLocaleTimeString("en-US", options);
  document.getElementById('time').textContent = estTime;
}

setInterval(updateESTTime, 1000); // Update every minute instead of every second
updateESTTime();