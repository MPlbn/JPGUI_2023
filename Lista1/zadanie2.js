//Done
arr = [1,2,3,271,12313,123,21313,541,42];
arr2 = [1, 10, 121, 777, 666, 415, 130];

console.log("Podpunkt a.1");
arr.sort((a, b) => b - a);
console.log(arr);

console.log("Podpunkt a.2");
arr2.sort((a, b) => b - a);
console.log(arr2);


console.log("Podpunkt b.1");
arr.sort( (a,b) => a%10 - b%10 );
console.log(arr);

console.log("Podpunkt b.2");
arr2.sort( (a,b) => a%10 - b%10 );
console.log(arr2);

console.log("Podpunkt c.1");
arr.sort( (a,b) => (a%100 - a%10) - (b%100 - b%10) );
console.log(arr);

console.log("Podpunkt c.2");
arr2.sort( (a,b) => (a%100 - a%10) - (b%100 - b%10) );
console.log(arr2);

console.log("Podpunkt d.1");
arr2.sort( (a,b) => {
    sumA = 0;
    sumB = 0;
    while(a > 0){
        sumA += a % 10;
        a = Math.floor(a/10);
    }

    while(b > 0){
        sumB += b % 10;
        b = Math.floor(b/10);
    }
    return sumA - sumB;
} );
console.log(arr2);

arr3 = [9817, 4127, 4819, 1, 48, 197, 741729, 20000000000000];

console.log("Podpunkt d.2");
arr3.sort( (a,b) => {
    sumA = 0;
    sumB = 0;
    while(a > 0){
        sumA += a % 10;
        a = Math.floor(a/10);
    }

    while(b > 0){
        sumB += b % 10;
        b = Math.floor(b/10);
    }
    return sumA - sumB;
} );
console.log(arr3);

