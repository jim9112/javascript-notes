'turtle'.padStart(10);
// puts ten spaces in front of string, can also use padEnd()
const fun = (
    a,
    b,
    c,
    d,
    ) => {
    console.log(a);

}

let obj = {
    username1: 'Santa',
    username2: 'rudolf',
    username3: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

Object.values(obj).forEach(value =>{
    console.log(value);
})

Object.entries(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})