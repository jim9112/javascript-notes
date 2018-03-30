var userAcount = {
    userName: "jimmy",
    password: "abc123"
};
var database = [{
    userName: "Jimmy",
    password: "abc123"
},
{
    userName: "sally",
    password: "1111"
},
{
    userName: "joey",
    password: "2222"
}
]

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

function isUserValid(user, pass){
    for (var i=0; i < database.length; i++) {
        if (user === database[i].userName && pass === database[i].password) {
           return true;
}
    }
return false
}
function signIn(user, pass) {
 if (isUserValid(user, pass)) {
console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and/or password!!!")
    }
}
signIn(usernamePrompt, passwordPrompt);