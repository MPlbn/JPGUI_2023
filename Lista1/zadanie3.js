function suma(...Args){
    let retVal = 0;

    for(let arg of Args){
        if(typeof arg === 'number'){
            retVal += arg;
        }
        if(Array.isArray(arg)){
            retVal += suma(...arg);
        }
    }

    return retVal;
}

console.log("podpunkt a");
console.log(suma(1,2,3,10,[],20,30,"marek",{a:4}));

console.log("podpunkt b");
console.log(suma(1,2,3,[4,5,"aa"],10,"asda"));

console.log("podpunkt c");
console.log(suma(1,2,3,[4,5,[5,5]],10));
