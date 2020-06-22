"use strict";


var btn = document.getElementById("sample");

btn.onclick = function () {
      displaySampleWeek();
      //#9 JQuery API
      $("#sample").fadeOut("slow");

}

//#8 table
function displaySampleWeek() {

      var dayWorkout = [
            "Bench, Over Head Press, Chest Dip, Bicep Curls",
            "Squat, Sumo Deadlift, Leg Extensions, Lunges",
            "Break Day",
            "Overhead Press, Incline Bench, Dumbell Incline Bench",
            "Front Squats, Leg Press, Deadlift",
            "Close Grip Bench, Tricep Extensions, Pullups",
            "Break Day"
      ];

      var dayWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];


      var sampleWeek = "<table><tr><th>Days</th><th>Types of Workouts</th><th>Rep Range</th></tr>";

      for (var i = 0; i < dayWorkout.length; i++) {

            var randNumber = Math.floor(Math.random() * 10) + 8;

            sampleWeek += "<tr><td>" + dayWeek[i] + "</td>";
            sampleWeek += "<td>" + dayWorkout[i] + "</td>";
            if (i == 2 || i == 6) {
                  sampleWeek += "<td>None</td>"
                  continue;
            }
            sampleWeek += "<td>" + randNumber + " per set</td></tr>";
      }


      //#3  
      //Get Id and add HTML content
      document.getElementById("sampleWeek").innerHTML = sampleWeek;
      //Query Selector mod
      document.querySelector("table").style.border = "3px solid orange";
      //Query Selector All mod
      var tableHead = document.querySelectorAll("table th, table td");

      for (var i = 0; i < tableHead.length; i++) {
            tableHead[i].style.border = "3px solid orange";
      }

};

function myApp() {
      alert("Thank you for downloading the app!");
      var appDiv = document.getElementById("appDiv");
      //#5 remove child
      appDiv.parentNode.removeChild(appDiv);
}