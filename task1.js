var disForm = document.getElementsByName("distribute")[0];
var devs = document.getElementsByName("devs")[0];
var candy = document.getElementsByName("candy")[0];
var errorEl = document.querySelector(".error");

var devHeader = document.querySelector(".devs__header");
var devNum = document.querySelector(".devs__num");

var candyHeader = document.querySelector(".candy__header");
var candyNum = document.querySelector(".candy__num");

var seatHeader = document.querySelector(".seat__header");
var seatNum = document.querySelector(".seat__num");

var warnHeader = document.querySelector(".warn__header");
var warnText = document.querySelector(".warn__text");

var errorMessage = "";

var devArray = [];
var candyArray = [];

disForm.addEventListener("submit", (e) => {
	e.preventDefault();

	// Make sure a number is supplied
	if (devs.value.isInteger === false) {
		errorMessage = "Developers value can only be a number";
		errorEl.textContent = errorMessage;
		return;
	}
	if (candy.value.isInteger === false) {
		errorMessage = "Candy value can only be a number";
		errorEl.textContent = errorMessage;
		return;
	}

	/*
        Create an array using the number supplied as the last integer 
        as the array starts from 1 i.e if number supplied is 5, we have [1,2,3,4,5]
    */

	for (var i = 1; i <= devs.value; i++) {
		devArray.push(i);
	}

	// Pick a random developer
	var devSeat =
		Math.floor(Math.random() * (devArray.length - devArray[0] + 1)) +
		devArray[0];
	console.log(devSeat);

	warnTheDeveloper(devs.value, candy.value, devSeat);

	candyArray = [];
	devArray = [];
});

function warnTheDeveloper(n, m, s) {
	var remainder = m % n;
	var destinationSeat = s + remainder;
	var destinationSeatIndex = destinationSeat - 1;

	var lastDev;

	if (destinationSeat <= n) {
		lastDev = destinationSeatIndex;

		devHeader.textContent = "Developers";
		devNum.textContent = n;

		candyHeader.textContent = "Treats";
		candyNum.textContent = m;

		seatHeader.textContent = "Seat";
		seatNum.textContent = s;

		warnHeader.textContent = "Warn";
		warnText.textContent = lastDev;

		console.log("Dev: " + n, "Candy:" + m, "Seat: " + s, "Warn: " + lastDev);
	} else {
		lastDev = destinationSeat - n;

		devHeader.textContent = "Developers";
		devNum.textContent = n;

		candyHeader.textContent = "Treats";
		candyNum.textContent = m;

		seatHeader.textContent = "Seat No";
		seatNum.textContent = s;

		warnHeader.textContent = "Warn";
		warnText.textContent = lastDev;
		console.log("Dev: " + n, "Candy:" + m, "Seat: " + s, "Warn: " + lastDev);
	}
}
