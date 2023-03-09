//Fibonacci z pierwszego zadania
function* Fibonacci(){
    let current = 0n;
    let next = 1n;

    while(true){
        const reset = yield current;
        [current, next] = [next, next + current];

        if(reset) {
            current = 0;
            next = 1;
        }
    }
}

//Faktyczne zadanie
function* fragment(iter, skip, limit = 1){
    for(let num of iter){
        if(skip > 0){
            skip--;
        }
        else{
            if(limit <= 0){
                return;
            }
            yield num;
            limit--;
        }
    }
}

for (let x of fragment( Fibonacci(), 100, 3 )){
    console.log(x);
}