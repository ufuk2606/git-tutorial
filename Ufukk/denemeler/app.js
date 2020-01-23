

let altLimit = 0;
let ustLimit = 100;
let a = 8;
let b = 5;

topla = 0;

for (altLimit = 0; altLimit <= ustLimit; altLimit++) {
    let kalan = altLimit % a ;
    let kalan1 = altLimit % b ;

    if ((kalan) == 0 && (kalan1) == 0  ) {
    topla += altLimit;
      
  } 
    
}
console.log( topla);


