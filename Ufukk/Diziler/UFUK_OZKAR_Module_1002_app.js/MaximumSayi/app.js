

let sayilar = [21, 2, 13, 19, 4, 25,54];
let max = sayilar[0];
for (let index = 0; index < sayilar.length; index++) {
   if (sayilar[index] > max) {
       max = sayilar[index] ;
   }
}


console.log(max);