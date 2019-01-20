
// TODO:
// Add ante Merdiem Feature
// Octopus/ Controller Model and View system
// test trial new Date()
// try:
// new Date() input dateDay = 1
// new Date()
// new Date()

// SUGGESTIONS:
// Put 'month' into an array, instead of "else if" statements
// Put 'dateDay' into an array, instead of "else if" statements

function init() {

}

function clockWork() {
  // Get current time
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let meridiem = "AM";

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  document.getElementById('hr').textContent = hours;
  document.getElementById('min').textContent = minutes;
  document.getElementById('sec').textContent = seconds;

  // Get current date
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  document.getElementById('year').textContent = year;


  // Condition for what month should it display
  let strOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let currentMonth = strOfMonths[month];

  // if (month == 0) {
  //     month = "January";
  // } else if (month == 1) {
  //     month = "February";
  // } else if (month == 2) {
  //     month = "March";
  // } else if (month == 3) {
  //     month = "April";
  // } else if (month == 4) {
  //     month = "May";
  // } else if (month == 5) {
  //     month = "June";
  // } else if (month == 6) {
  //     month = "July";
  // } else if (month == 7) {
  //     month = "August";
  // } else if (month == 8) {
  //     month = "September";
  // } else if (month == 9) {
  //     month = "October";
  // } else if (month == 10) {
  //     month = "November";
  // } else if (month == 11) {
  //     month = "December";
  // }

  document.getElementById('month').textContent = currentMonth;

  // Condition for what month should it display
  let dateDay = date.getDay();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  currentDay = days[dateDay];

  // if (dateDay == 0) {
  //   dateDay = "Sunday";
  // } else if (dateDay == 1) {
  //   dateDay = "Monday";
  // } else if (dateDay == 2) {
  //   dateDay = "Tuesday";
  // } else if (dateDay == 3) {
  //   dateDay = "Wednesday";
  // } else if (dateDay == 4) {
  //   dateDay = "Thursday";
  // } else if (dateDay == 5) {
  //   dateDay = "Friday";
  // } else if (dateDay == 6) {
  //   dateDay = "Saturday";
  // }

  document.getElementById('display-day-word').textContent = currentDay;

  day = (day < 10) ? "0" + day : day;

  document.getElementById('display-day-number').textContent = day;

  setTimeout(clockWork, 1000);
}

function view() {
  
}

clockWork();
