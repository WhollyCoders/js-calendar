var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var month = [
              {
              "name":"January",
              "short":"jan",
              "num_days": 31
            },{
              "name":"February",
              "short":"feb",
              "num_days": 28
            },{
              "name":"March",
              "short":"mar",
              "num_days": 31
            },{
              "name":"April",
              "short":"apr",
              "num_days": 30
            },{
              "name":"May",
              "short":"may",
              "num_days": 31
            },{
              "name":"June",
              "short":"jun",
              "num_days": 30
            },{
              "name":"July",
              "short":"jul",
              "num_days": 31
            },{
              "name":"August",
              "short":"aug",
              "num_days": 31
            },{
              "name":"September",
              "short":"sep",
              "num_days": 30
            },{
              "name":"October",
              "short":"oct",
              "num_days": 31
            },{
              "name":"November",
              "short":"nov",
              "num_days": 30
            },{
              "name":"December",
              "short":"dec",
              "num_days": 31
            }];
  var months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  var mainHeader            = document.getElementById("header-time");
  var headerDate            = document.getElementById("header-date");
  var calendarHeader        = document.getElementById("calHeader-heading");

  var prev = document.getElementById("previous-month");
  prev.addEventListener("click", getPreviousMonth);

  var next = document.getElementById("next-month");
  next.addEventListener("click", getNextMonth);

  var showTime = setInterval(displayTime, 1000);
  displayCalendarDate();

function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function getDaysInYear(year){
  var x;
  var totalDays = 0;
  // If Leap Year, ADD 1 to number of days in February
  if(leapYear(year)){
    month[1]["num_days"] = 29;
  }else{month[1]["num_days"] = 28;}
    for(x in month){
      console.log("Year: "+year+" | Month: "+month[x]["name"]+" | Days: "+month[x]["num_days"]);
      totalDays += month[x]["num_days"];
    }
    console.log("Total Days in Year: "+totalDays);
  }

function getDayOfWeek(currentDay){
  return days[currentDay];
}

function getMonthOfYear(monthIndex){
  return months[monthIndex];
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

function displayCalendarDate(){
    var today                 = new Date();
    var currentDate           = getCurrentDate(today);
    headerDate.innerHTML      = currentDate[0];
    calendarHeader.innerHTML  = currentDate[1];
}

function displayTime() {
    var today                 = new Date();
    var currentTime           = today.toLocaleTimeString();
    mainHeader.innerHTML      = currentTime;
}

function currentTime(){
  var today = new Date();
  return today.toLocaleTimeString();
}

function currentDate(){
  var today = new Date();
  return getCurrentDate(today)[0];
}

function calendarLabel(){
  var today = new Date();
  return getCurrentDate(today)[1];
}

function getCurrentMonth(){
  var today             = new Date();
  var currentMonthIndex = today.getMonth();
  var currentMonth      = months[currentMonthIndex];
  return [currentMonthIndex, currentMonth];
}

function getFirstOfMonth(data){
  var newMonth  = new Date(data);
  var dayIndex  = newMonth.getDay();
  var day       = days[dayIndex];
  return [dayIndex, day];
}

function getDaysInMonth(){}

function getStartingDay(data){
  var newDate = new Date(data);
  return days[newDate.getDay()];
}

function getStartingIndex(data){
  var newDate = new Date(data);
    return newDate.getDay();
}

function getDateData(){
  var today           = new Date();
  var dayIndex        = today.getDay()
  var day             = getDayOfWeek(dayIndex);
  var monthIndex      = today.getMonth()
  var month           = getMonthOfYear(monthIndex);
  var theDate         = today.getDate();
  var year            = today.getFullYear();
  var currentDate     = day+", "+month+" "+theDate+", "+year;
  var calendarHeading = month+" "+year;
  var dateData = {
      "today": today,
      "dayIndex": dayIndex,
      "day": day,
      "monthIndex": monthIndex,
      "month": month,
      "theDate": theDate,
      "year": year,
      "currentDate": currentDate,
      "calendarHeading": calendarHeading
  };
  return dateData;
}

function getMonthIndex(month){
  return months.indexOf(month);
}

function getCurrentDateData(){
  var currentDate = calendarHeader.innerHTML;
  var dateResult  = currentDate.split(" ");
  var monthIndex  = getMonthIndex(dateResult[0]);
  var year        = dateResult[0];
}

function getPreviousMonth(){
  var currentDate = calendarHeader.innerHTML;
  var dateResult  = currentDate.split(" ");
  var monthIndex  = getMonthIndex(dateResult[0]);
  var year        = parseInt(dateResult[1]);

  if(monthIndex == 0){
    var prevMonth             = months[11];
    var prevYear              = year - 1;
    var output                = prevMonth+" "+prevYear;
    calendarHeader.innerHTML  = output;
    return;
  }
    var monthIndex            = monthIndex - 1;
    var prevMonth             = months[monthIndex];
    var prevYear              = year;
    var output                = prevMonth+" "+prevYear;
    calendarHeader.innerHTML  = output;
    return;

}

function getNextMonth(){
  var currentDate = calendarHeader.innerHTML;
  var dateResult  = currentDate.split(" ");
  var monthIndex  = getMonthIndex(dateResult[0]);
  var year        = parseInt(dateResult[1]);

  if(monthIndex == 11){
    var nextMonth             = months[0];
    var nextYear              = year + 1;
    var output                = nextMonth+" "+nextYear;
    calendarHeader.innerHTML  = output;
    return;
  }
    var monthIndex            = monthIndex + 1;
    var nextMonth             = months[monthIndex];
    var nextYear              = year;
    var output                = nextMonth+" "+nextYear;
    calendarHeader.innerHTML  = output;
    return;
}

var Calendar = {
  "days": [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  "months": [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ],
  "monthArray": [
                {
                "name":"January",
                "num_days": 31,
                "prev_month": function(){

                },
                "next_month": function(){}
              },{
                "name":"February",
                "num_days": 28,
                "prev_month": "January",
                "next_month": "March"
              },{
                "name":"March",
                "num_days": 31,
                "prev_month": "February",
                "next_month": "April"
              },{
                "name":"April",
                "num_days": 30,
                "prev_month": "March",
                "next_month": "February"
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
              }],
  "currentTime": function(){
    return this.today().toLocaleTimeString();
  },
  "currentDate": currentDate,
  "calendarLabel": calendarLabel,
  "dayOfWeek": function(){
    return this.days[this.dayOfWeekIndex()];
  },
  "dayOfWeekIndex": function(){
    return this.today().getDay();
  },
  "today": function(){
    return new Date();
  },
  "currentMonth": function(){
    return this.months[this.currentMonthIndex()];
  },
  "currentMonthIndex": function(){
    return this.today().getMonth();
  },
  "currentYear": function(){},
  "daysInMonth": function(){
    return this.monthArray[this.currentMonthIndex()]["num_days"];
  },
  "firstRowSkip": function(data){
    var newDate = new Date(data);
    return newDate.getDay();
  },
  "firstRowOutput": function(){
    return 7 - this.firstRowSkip();
  },
  "numberOfRows": function(){
    return 1 + (this.daysInMonth()-this.firstRowOutput()) / 7;
  }
};




// <script type="text/javascript" src="calendar.js"></script>
// <script type="text/javascript">
//     window.onload = function() {
//         var cal = new Calendar();
//         cal.drawCalendar();
//     }
//     ...
// </script>
