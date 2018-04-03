
function isUserValid(bool) {
    return bool;
}
var answer = isUserValid(true) ? "You may enter" : "Access denied";

var automatedAnswer = "Your account # is" + ( isUserValid(false) ? " 1234" : " not available")
;


function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "foward":
        whatHappens = "you encounter a monster";
        break;
        case "back":
        whatHappens = "you arrive home";
        break;
        case "right":
        whatHappens = "you encounter a river";
        break;
        case "left":
        whatHappens = "you encounter a troll";
        break;
        default:
        whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}