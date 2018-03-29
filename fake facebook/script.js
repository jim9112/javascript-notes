var userAcount = {
    userName: "Jimmy",
    password: "abc123"
};
var database = [{
    userName: "Jimmy",
    password: "abc123"
}]

let newsfeed = [{
    userName: "Joe",
    timeline: "Stuff I did."
},
{
    userName: "Frank",
    timeline: "Look at my cat."
},
{
    userName: "Jhnon",
    timeline: "Insert meme here."
}]

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0].userName && pass === database[0].password) {
console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and/or password!!!")
    }
}
signIn(usernamePrompt, passwordPrompt);