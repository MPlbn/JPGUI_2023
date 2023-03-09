function Fibo(){
    this.previous = 0n;
    this.current = 1n;
}

Fibo.prototype.next = function (){
    const nextValue = this.previous + this.current;
    this.previous = this.current;
    this.current = nextValue;
    return{
        value: nextValue,
        done: false,
    };
};

const seq = new Fibo();
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