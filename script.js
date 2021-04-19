


var date = new Date();

var month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

// First day of the current month
var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
// Gets the day of the week from first day
var dayOfWeek = firstDay.getDay();

// Returns how many days selected month has
function getDaysInMonth (month, year) {
    return new Date(year, month, 0).getDate(); 
} 
var daysInMonth = getDaysInMonth(date.getMonth() + 1, date.getFullYear());

//Print them onto the screen
var j = 1
for (var i = dayOfWeek; i < daysInMonth + dayOfWeek; i++) {
	document.querySelector("#days button:nth-of-type(" + i + ")").innerHTML = j;
	j++;
}

// Selects current month on month selection
var currentMonth = date.getMonth();
document.querySelector("#month").selectedIndex = currentMonth;

// Called upon chaning the month on calendar

function monthChange() {

	//Fetches the value of selected month 0-11 + 1
	let value = parseInt(document.querySelector("#month").value);
	console.log(value);
	
	//Gets days in selected(value) month
	daysInMonth = getDaysInMonth(value + 1, date.getFullYear());
	console.log(daysInMonth);	

	//Gets first day of selected month
	firstDay = new Date(date.getFullYear(), value, 1);
	console.log(firstDay);
	dayOfWeek = firstDay.getDay();
	console.log(dayOfWeek);

	//Erases previus month
	for (var i = 1; i < 43; i++) {
		document.querySelector("#days button:nth-of-type(" + i + ")").innerHTML = "";
	};

	//Sunday comes up as a "0" changed it to 7 
	if (dayOfWeek == 0) {
		dayOfWeek = 7;
	};

	//Writes days on calendar
	j = 1
	for (var i = dayOfWeek; i < daysInMonth + dayOfWeek; i++) {
		document.querySelector("#days button:nth-of-type(" + i + ")").innerHTML = j;
		j++;
	}
};


var selectedDay;
var selectedDate;
const buttons = document.querySelectorAll("#days button")
for (const button of buttons) {
  button.addEventListener('click', function(event) {;
  	selectedDate = [parseInt(parseInt(this.textContent),document.querySelector("#month").value), 2020];
  	console.log(selectedDate);	
  	newDiv = document.createElement("div");
  	newDiv.id = selectedDate[0] + "/" + selectedDate[1] + "/" + selectedDate[2];
  	newDiv.className = "newEvent";
  	document.querySelector("#madeEvents").appendChild(newDiv);


  })
}

var events = {

}
var eventsKeys;


document.querySelector("#submit").onclick = function() {
	let value = document.querySelector("#event").value;
	events[selectedDate[2] + "/" + selectedDate[0] + "/" + selectedDate[1]] = value;
	eventsKeys = Object.keys(events);
}




