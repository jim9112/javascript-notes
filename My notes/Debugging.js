const flattened = [[0,1], [2,3], [4,5]].reduce(
    (a,b) => a.concat(b), []
);

//a is accumuator, b is array


const flattened = [[0,1], [2,3], [4,5]].reduce(
    (a,b) => {
        console.log('array', b);
        console.log('accumulator', a);
        return a.concat(b) 
    }, []);




    