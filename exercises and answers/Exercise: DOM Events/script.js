var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var blue = document.getElementsByClassName("delete")
var one = document.getElementsByClassName("thing");
var two = document.querySelectorAll("li");
function togleListItem() {
li.classList.toggle("done");
}

li.addEventListener("click", togleListItem); 

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function deleteItem(){
two[1].remove();
}
blue[1].addEventListener("click", deleteItem);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

