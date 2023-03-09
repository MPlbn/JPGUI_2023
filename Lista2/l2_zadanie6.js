//Zadanie jest niedokończone, niestety funkcja nie jest smart i trochę mnie to przerosło.

function Arytmetyczny({a1, r} = {a1: 0n, r: 1n}) {
    this.a1 = BigInt(a1);
    this.r = BigInt(r);
  }
  
  Arytmetyczny.prototype.a = function(i) {
    return this.a1 + BigInt(i - 1) * this.r;
  };
  
  Arytmetyczny.prototype.suma = function(i) {
    return BigInt(i) * (2n * this.a1 + BigInt(i - 1) * this.r) / 2n;
  };
  
  Object.defineProperty(Arytmetyczny.prototype, "r", {
    get: function() {
      return this._r;
    },
    set: function(value) {
      this._r = BigInt(value);
    }
  });
  
  Arytmetyczny.prototype[Symbol.iterator] = function* () {
    let i = 1;
    while (true) {
      yield this.a(i++);
    }
  };

const arithmetic = new Arytmetyczny({a5:14, r:3});


console.log(arithmetic.a(1)); // 2n
console.log(arithmetic.a(5)); // 14n
console.log(arithmetic.suma(5)); // 40n
console.log(arithmetic.r); // 3n
arithmetic.r = 5;
console.log(arithmetic.r); // 5n

for (const val of arithmetic) {
  if (val > 100n) {
    break;
  }
  console.log(val);
}