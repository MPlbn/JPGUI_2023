Array.prototype.wspak = function*(){
    let i = this.length - 1;
    for(let __ of this){
        yield this[i];
        i--;
    }
}

for(let x of [2,3,4,5,4,10,314,4132].wspak()){
    console.log(x);
}