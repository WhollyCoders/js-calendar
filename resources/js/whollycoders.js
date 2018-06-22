// ******************************* PROPERTIES **********************************
// Days in Week Array
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
// Months in Year Array
var month = [
              {
              "name":"January",
              "num_days": 31
            },{
              "name":"February",
              "num_days": 28
            },{
              "name":"March",
              "num_days": 31
            },{
              "name":"April",
              "num_days": 30
            },{
              "name":"May",
              "num_days": 31
            },{
              "name":"June",
              "num_days": 30
            },{
              "name":"July",
              "num_days": 31
            },{
              "name":"August",
              "num_days": 31
            },{
              "name":"September",
              "num_days": 30
            },{
              "name":"October",
              "num_days": 31
            },{
              "name":"November",
              "num_days": 30
            },{
              "name":"December",
              "num_days": 31

// ****************************** FUNCTIONS ************************************

// Calendar Label
function calendarLabel(){
  var today = new Date();
  return getCurrentDate(today)[1];
}

// Current Date
function currentDate(){
  var today = new Date();
  return getCurrentDate(today)[0];
}

// Current Time
function currentTime(){
  var today = new Date();
  return today.toLocaleTimeString();
}

// Display Time
function displayTime() {
    var today       = new Date();
    var currentTime = today.toLocaleTimeString();
    document.getElementById("header-time").innerHTML = currentTime;

    var currentDate = getCurrentDate(today);
    document.getElementById("header-date").innerHTML        = currentDate[0];
    document.getElementById("calHeader-heading").innerHTML  = currentDate[1];
}

// Get the Current Date
function getCurrentDate(today){
  var day             = getDayOfWeek(today.getDay());
  var month           = getMonthOfYear(today.getMonth());
  var theDate         = today.getDate();
  var year            = today.getFullYear();
  var currentDate     = day+", "+month+" "+theDate+", "+year;
  var calendarHeading = month+" "+year;
  return [currentDate, calendarHeading];
}

// Get Day of the Week
function getDayOfWeek(currentDay){
  return days[currentDay];
}

// Get Number of Day in a Year
function getDaysInYear(year){
  var x;
  var totalDays = 0;
  // If Leap Year, ADD 1 to number of days in February
  if(leapYear(year)){
    month[1]["num_days"] = 29;
  }
    for(x in month){
      console.log("Year: "+year+" | Month: "+month[x]["name"]+" | Days: "+month[x]["num_days"]);
      totalDays += month[x]["num_days"];
    }
    console.log("Total Days in Year: "+totalDays);
  }

// Get Month of the Year
function getMonthOfYear(currentMonth){
  return month[currentMonth]["name"];
}

// Get Starting Day
function getStartingDay(data){
  var newDate = new Date(data);
  return days[newDate.getDay()];
}

// Get Starting Index
function getStartingIndex(data){
  var newDate = new Date(data);
    return newDate.getDay();
}

// Check for Leap Year
function isLeapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}










// ===============================================================================
//
// function getPreviousMonth1(){
//   console.log("Previous Month is May");
//   var monthIndex  = dateData.monthIndex;
//   var year        = dateData.year;
//   // If current month's index is 0, previous month will be 11 AND previous Year
//   // will be current year minus 1
//   // Otherwise, previous month will be current month minus 1 (Year will be the same)
//   if(monthIndex == 0){
//     var prevMonth             = 11;
//     var prevYear              = year - 1;
//     var output                = prevMonth+" "+prevYear;
//     calendarHeader.innerHTML  = output;
//   }
//     var prevMonth             = monthIndex - 1;
//     var prevYear              = year;
//     var output                = prevMonth+" "+prevYear;
//     calendarHeader.innerHTML  = output;
// }
//
// function getNextMonth1(){
//   console.log("Next Month is July");
//   var monthIndex  = dateData.monthIndex;
//   var year        = dateData.year;
//   // If current month's index is 11, next month will be 0 AND next Year
//   // will be current year plus 1
//   // Otherwise, next month will be current month plus 1 (Year will be the same)
//   if(monthIndex == 11){
//     var nextMonth             = 0;
//     var nextYear              = year + 1;
//     var output                = nextMonth+" "+nextYear;
//     calendarHeader.innerHTML  = output;
//   }
//     var nextMonth             = monthIndex + 1;
//     var nextYear              = year;
//     var output                = nextMonth+" "+nextYear;
//     calendarHeader.innerHTML  = output;
// }
