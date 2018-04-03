// const player = "bobby"
// let experience = 100;
// let wizardLevel = false;

// if (experience > 90) {
//     let wizardLevel = true;
// }

// Destructuring

// const obj = {
//     player: 'bobby',
//     experience: 100,
//     wizardLevel: false,
// }

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;
// // instead do this:
// const { player, experience} = obj;
// let { wizardLevel} = obj;

// // Template strings
// const name = "Sally";
// const age = 34;
// const pet = "horse";
// const bestGreeting = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet}.`;
// console.log(bestGreeting);


//default argumants
function greet(name='', age = 30, pet='cat') {
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet}.`;
}

// arrow functions

function add(a, b) {
    return a + b;
}
// becomes
const add = (a, b) => a + b;