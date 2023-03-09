//Done
function* dzielniki(n){
    for(let i = 1; i <=n; i++){
        if(n % i === 0){
            yield i;
        }
    }
}

function* pierwsze(n){
    for (let i = 2; i <= n; i++) {
        let jestPierwsza = true;
        
        for (let j = 2; j <= Math.sqrt(i); j++) {
          if (i % j === 0) {
            jestPierwsza = false;
            break;
          }
        }
        
        if (jestPierwsza) {
          yield i;
        }
      }
}

function* rozklad(n){
    let dzielnik = 2;

  while (n > 1) {
    if (n % dzielnik === 0) {
      yield dzielnik;
      n /= dzielnik;
    } else {
      dzielnik++;
    }
  }
}
//funkcje do wypisania
function wypisz(gen) {
    for (let x of gen)
    console.log(x);
    }
    function wypisz2(gen) {
    while (!(x = gen.next()).done)
    console.log(x.value);
    }

function wypisz2(gen) {
    while (!(x = gen.next()).done)
    console.log(x.value);
    }
        

//faktyczne sprawdzenie
wypisz(dzielniki(250));
wypisz(pierwsze(60));
wypisz(rozklad(250));
wypisz2(dzielniki(250));
wypisz2(pierwsze(60));
wypisz2(rozklad(250));

console.log("\n" + Array.from(dzielniki(250)));
console.log("\n" + Array.from(pierwsze(60)));
console.log("\n" + Array.from(rozklad(250)));

//Wszystkie formy sprawdzenia pokazuja takie same wyniki