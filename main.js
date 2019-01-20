
// TODO:
// Add ante Merdiem Feature
// Octopus/ Controller Model and View system
// test trial new Date()
// TEST:
// new Date() input dateDay = 1
// new Date()
// new Date()

function clockWork() {
  // Get current time
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";

  // Fill in the single integer
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  // Make into a 12hr-based clock
  if (hours == 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  document.getElementById('hr').textContent = hours;
  document.getElementById('min').textContent = minutes;
  document.getElementById('sec').textContent = seconds;
  document.getElementById('display-meridiem').textContent = session;

  // Get current date
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  document.getElementById('year').textContent = year;


  // Condition for what month should it display
  let strOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let currentMonth = strOfMonths[month];

  document.getElementById('month').textContent = currentMonth;

  // Condition for what month should it display
  let dateDay = date.getDay();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  currentDay = days[dateDay];

  document.getElementById('display-day-word').textContent = currentDay;

  // Fill in the single integer
  day = (day < 10) ? "0" + day : day;

  document.getElementById('display-day-number').textContent = day;

  setTimeout(clockWork, 1000);
}

clockWork();
