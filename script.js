"use strict";

//#2 onload
window.addEventListener("load", function () {

      //5 Remove child
      var resources = document.getElementById("resources");
      var elements = resources.getElementsByTagName("li");
      resources.removeChild(elements[0]);

      //#4 timer
      setInterval(DateAndTime, 1000);
      setupStyle();

      //#9 JQuery API
      $("#textOnly").click(function () {
            $("img").toggle();
      });

      //#9 JQuery API
      $("#textOnly").css("float", "right").css("background-color", "#adad9a").css("border-radius", "5px");
});


//#12 Function Expression
var remove = function removeStyle(e) {
      var p = e.currentTarget;
      p.classList.remove("styleChange");
};


//#12 Named Function
function addStyle(e) {
      var p = e.currentTarget;
      p.classList.add("styleChange");
};


//#6 & #12 Self-invoking Function
(function modClassList() {
      var pageStyle = document.createElement("link");

      pageStyle.setAttribute("href", "ss_insert.css");
      pageStyle.setAttribute("rel", "stylesheet");

      document.head.appendChild(pageStyle);

      //#3 Get Id mod
      var pTag = document.querySelectorAll("p");

      for (var i = 0; i < pTag.length; i++) {
            //#4 mouse event
            pTag[i].addEventListener("mouseover", addStyle);
            pTag[i].addEventListener("mouseout", remove);
      }

})();


//#7 Date && #12 Arrow Function
var DateAndTime = () => {
      document.getElementById("date").innerHTML = new Date().toDateString();
      document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
};

//#
function setupStyle() {
      
      //#5
      var pageStyle = document.createElement("link");

      pageStyle.setAttribute("href", "darkmode.css");
      pageStyle.setAttribute("rel", "stylesheet");

      pageStyle.setAttribute("disabled", "disabled");

      document.head.appendChild(pageStyle);

      pageStyle.disabled = true;

      var buttonDIV = document.createElement("div");
      buttonDIV.setAttribute("id", "styleButtons");

      var originalMode = document.createElement("input", "button");
      originalMode.setAttribute("type", "button");
      originalMode.setAttribute("value", "Original");

      var darkMode = document.createElement("input", "button");
      darkMode.setAttribute("type", "button");
      darkMode.setAttribute("value", "Dark Mode");


      buttonDIV.appendChild(originalMode);
      buttonDIV.appendChild(darkMode);

      //#3 Query Selector add buttonDiv
      var header = document.querySelector(".container");
      header.insertBefore(buttonDIV, header.firstChild);

      var buttonStyles = document.createElement("style");
      document.head.appendChild(buttonStyles);

      //#11 insertRule
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "div#styleButtons{\
                  width: 200%\
      }", 0);


      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "div#styleButtons input{\
                  background-color: rgba(124, 150, 171, 0.95);\
                  border: 1px solid rgba(0, 24, 123, 0.6);\
                  border-radius: 10%;\
                  cursor: pointer;\
                  color: white;\
                  display: inline-block:\
                  font-size: 0.5vw;\
                  margin: 3px 3px;\
                  width: 40%;\
                  height: auto;\
            }", 1);


      originalMode.onclick = function () {
            pageStyle.disabled = true;
      }
      darkMode.onclick = function () {
            pageStyle.disabled = false;
      }

}




/*
1 link pages
x

2 window.onload listner
x



3
use query selector to add up total time of the workout??? in nSuns
x


4
x


5 remove
- remove from the ol id=resources
- append to the ol id= resources
make button that removes an element
on button press and click do something
check lab for puzzle
add button for plain text?

6.
      var pageStyle = document.createElement("link");

      pageStyle.setAttribute("href", "ss_insert.css");
      pageStyle.setAttribute("rel", "stylesheet");

      pageStyle.setAttribute("disabled", "disabled");

      -- append the link element to the node tree
      document.head.appendChild(pageStyle);

ss_insert.css with any styles


7.
html
<input type="text" id="orderDate" name="orderDate" readonly />
js
window.addEventListener("load", function () {
      var orderForm = this.document.forms.orderForm;
      orderForm.elements.orderDate.value = new Date().toDateString();
}
x


8 
-table for 7 days ppl workout plan
x


9
???


10
create a question forms that gets submited through the website
form is in reviews w/ validation
x


11
insertrule switch css page to dark mode and enable mouse/keyboard events
x



*/