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

const seq = Fibonacci();
//Pierwsza opcja programu - dziala

 for(let i = 0; i < 2000; i++){
    console.log(seq.next().value);
} 

//Druga opcja programu z setInterval

/* const start = setInterval(() => {
    let nextValue = seq.next(); //Musi byc zapisane w zmiennej
    if(nextValue.done){         //Zeby byla mozliwosc sprawdzenia w tej linijce - bez zapisu zmiennej, funkcja wyrzucalaby co drugi element.
        clearInterval(start);
    }
    else{
        console.log(nextValue.value);
    }
}, 500); */