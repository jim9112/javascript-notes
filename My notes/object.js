var user = {
    name: "John",
    age: "34",
    hobby: "Soccer",
    isMarried: false,
    numbers: ["one", "two", "three"],
    shout: function () {
        console.log("AHHHHHHH!");

    }
};
console.log(user.age);
user.favoriteFood = "Pizza";
console.log(user);
// calls the third number inside the numbers array in user data object
console.log(user.numbers[2]);
// can include data objects in the array and the other way around
var list = [{
        userName: "jimmy",
        password: "hello"
    },
    {
        userName: "john",
        password: "password"
    }
]
console.log(list);
// call the password of second user in array
console.log(list[1].password);
// call function shout from user data type
user.shout();
// can do empty lists and data objects