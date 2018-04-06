const first = () => {
    const greet = 'hi';
    const second = () => {
        alert(greet);
    }
    return second;
}
const newFunc = first();
newFunc();

// Currying
const multiplu = (a, b) => a*b;
const curriedMultipy = (a) => (b) => a * b;
curriedMultipy(3)(4);

// Compose

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);
