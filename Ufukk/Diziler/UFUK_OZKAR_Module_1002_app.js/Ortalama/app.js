

let sayilar = [21, 2, 13, 19, 4, 25];
let toplam = 0 ;
let sonuc = 0;
for (let index = 0; index < sayilar.length; index++) {
    toplam += sayilar[index] ;
    sonuc = toplam / sayilar.length ;
}


console.log(sonuc);