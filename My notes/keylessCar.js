function checkDriverAge() {
var age = prompt("What is your age?");
if (Number(age) < 18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}
function checkDriversAge2(a) {
	if (Number(a) < 18) {
	return alert("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(a) > 18) {
		return alert("Powering On. Enjoy the ride!");
	} else if (Number(a) === 18) {
		return alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}

// must follow this flow if the === apears second will not get the right answer
