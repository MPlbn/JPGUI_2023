//Done
function bigger(a){

    return (x) => x > a;
}

function smaller(a){

    return (x) => x < a;
}

function between(a,b){

    return (x) => x >= a && x <= b;
}
//bigger
console.log("BIGGER");
console.log([2,31,5,3,6].filter(bigger(3)));
console.log([2,31,5,3,6].find(bigger(3)));
console.log([2,31,5,3,6].findIndex(bigger(3)));
console.log([2,31,5,3,6].every(bigger(3)));
console.log([2,31,5,3,6].some(bigger(3)));

//smaller
console.log("SMALLER");
console.log([2,31,5,3,6].filter(smaller(3)));
console.log([2,31,5,3,6].find(smaller(3)));
console.log([2,31,5,3,6].findIndex(smaller(3)));
console.log([2,31,5,3,6].every(smaller(3)));
console.log([2,31,5,3,6].some(smaller(3)));

//between
console.log([3,2,10,-15,40,5].filter(between(0,5)));

