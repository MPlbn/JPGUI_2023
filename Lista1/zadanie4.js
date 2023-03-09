//Done
class Kwadrat{
    constructor(a) {this.a = a;}
    get bok() {return this.a;}
    set bok(a) {this.a = a;}
    get obwod() {return 4*this.a;}
    set obwod(len) {this.a = len/4;}
    get pole() {return this.a * this.a;}
    set pole(P) {this.a = Math.sqrt(P)}
    toString() { return `a=${this.bok}\nL=${this.obwód}\nP=${this.pole}\n`; }
}


class Kolo{
    constructor(r) {this.r = r;}
    get radius() {return this.r;}
    set radius(r) {this.r = r;}
    get diameter() {return this.r * 2;}
    set diameter(d) {this.r = d / 2;}
    get obwod() {return Math.PI * this.r * 2;}
    set obwod(C) {this.r = C / Math.PI * 2;}
    get pole() {return Math.PI * this.r * this.r;}
    set pole(A) {this.r = Math.sqrt(A/Math.PI);}
    toString(){return `r = ${this.r}\nd = ${this.diameter}\ncircumference = ${this.obwod}\narea = ${this.pole}\n`;}
}

function demo(){
    var O = new Kolo(3);
    console.log(O + "");
    O.radius = 8;
    console.log(O+ "");
    O.diameter = 10;
    console.log(O+ "");
    O.pole = 4;
    console.log(O+ "");
    O.obwod = 7;
    console.log(O+ "");
}

//faktyczny program

demo();

let Figures = [new Kolo(10), new Kolo(20), new Kolo(4), new Kwadrat(4), new Kwadrat(10), new Kwadrat(20)];
var Psum = 0;
var Osum = 0;


for(f of Figures){
    Psum += f.pole;
    Osum += f.obwod;
}

console.log(`Suma pol: ${Psum}\nSuma obwodow: ${Osum}`);
