var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var showTime = setInterval(displayTime, 1000);

function getDayOfWeek(currentDay){
  return days[currentDay];
}

function getMonthOfYear(currentMonth){
  return months[currentMonth];
}

function getCurrentDate(today){
  var day             = getDayOfWeek(today.getDay());
  var month           = getMonthOfYear(today.getMonth());
  var theDate         = today.getDate();
  var year            = today.getFullYear();
  var currentDate     = day+", "+month+" "+theDate+", "+year;
  var calendarHeading = month+" "+year;
  return [currentDate, calendarHeading];
}

function displayTime() {
    var today       = new Date();
    var currentTime = today.toLocaleTimeString();
    document.getElementById("header-time").innerHTML = currentTime;

    var currentDate = getCurrentDate(today);
    document.getElementById("header-date").innerHTML        = currentDate[0];
    document.getElementById("calHeader-heading").innerHTML  = currentDate[1];
}
