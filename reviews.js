"use strict";

window.addEventListener("load", function () {

      document.getElementById("subButton").onclick = runSubmit;

      //#12 Anonymous Function
      document.getElementById("reset").addEventListener("click", function (e) {
            //#4 keyboard event
            if (e.shiftKey) {
                  document.getElementById("questionForm").reset();
            } else {
                  alert("Shift click the reset button");
            }
      });

      displayReviews();


});

//#3 Query Selector All add HTML
function displayReviews() {

      var pplReviews = document.querySelectorAll("#reviews li p");
      var list = document.querySelectorAll("#reviews li");

      var reviews = new Array();

      reviews[0] = "&ldquo;Thanks to <em>nSuns &amp; PPL</em> I lost over 20lbs. I love it!&rdquo;<br/><br/>&mdash; Kevin, Utah";
      reviews[1] = "&ldquo;I use <em>PPL &amp; nSuns</em> to change the way that I workout.&rdquo;<br/><br/>&mdash; Paul, Texas";
      reviews[2] = "&ldquo;Using these program I have made progressive changes to my physique!&rdquo;<br/><br/> &mdash; Lisa, Florida";
      reviews[3] = "&ldquo;You cannot go wrong if you give these programs a shot. You won't regret out!&rdquo;<br/> <br/> &mdash; Karen, Nebraska";
      reviews[4] = "&ldquo;<em>I've seen great improvement</em>. I don't want to miss another day working out!&rdquo;<br/> <br/> &mdash; Gianna, Vermont";
      reviews[5] = "&ldquo;After using <em>PPL &amp; nSuns</em>, I can't go and use any other programs!&rdquo;<br/> <br/> &mdash; Todd, Illinois";

      for (var i = 0; i < pplReviews.length; i++) {
            list[i].insertBefore(pplReviews[i], list.lastChild).innerHTML = reviews[i];
      }
}



function runSubmit() {
      validateName();
      validatePhoneNumber();
      validateDay();
      validateQuestions();
}

//#10 form validation
function validateName() {
      var fullName = document.getElementById("fullname");

      if (fullName.validity.valueMissing) {
            fullName.setCustomValidity("Enter your full name");
      } else {
            fullName.setCustomValidity("")
      }
}

function validatePhoneNumber() {
      var phoneNumber = document.getElementById("telephone");
      if (phoneNumber.validity.valueMissing) {
            phoneNumber.setCustomValidity("Enter your phone number");
      } else if (phoneNumber.validity.patternMismatch) {
            phoneNumber.setCustomValidity("Please match the requested format");
      } else {
            phoneNumber.setCustomValidity("");
      }
}

function validateDay() {
      var weekday = document.querySelector("#weekDays");

      if (weekday.selectedIndex === 0) {
            weekday.setCustomValidity("Please select the best day");
      } else {
            weekday.setCustomValidity("");
      }
}

function validateQuestions() {
      var questions = document.querySelector("#questions");

      if (questions.validity.valueMissing) {
            questions.setCustomValidity("Please enter your questions or comments");
      } else {
            questions.setCustomValidity("")
      }
}