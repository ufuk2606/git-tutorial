
let sayilar = [21, 2, 13, 19, 4, 25];

for (let index = 0; index < sayilar.length; index++) {
  
    let kalan = sayilar[index]  % 2  ;
  
    if (kalan == !0) {
        console.log(sayilar[index]);
   }
}
