// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function() {
//     console.log("Click!");
// });

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLenth() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

button.addEventListener("click", function () {
    if (inputLenth() > 0) {
        createListElement();
    }

})

input.addEventListener("keypress", function (event) {
    if (inputLenth() > 0 && event.keyCode === 13) {
        createListElement();
    }

})