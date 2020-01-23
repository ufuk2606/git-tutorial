
let sayilar = [21, 2, 13, 19, 4,1, 25,-54];
let min = sayilar[0];
for (let index = 0; index < sayilar.length; index++) {
   if (sayilar[index] < min) {
       min = sayilar[index] ;
   }
}


console.log(min);