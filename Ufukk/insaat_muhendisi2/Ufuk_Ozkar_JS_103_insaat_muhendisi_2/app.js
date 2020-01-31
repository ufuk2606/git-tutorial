

let dikdortgenOlanlar = [7,5,2,8,10,20,7,21,12,10, 6];
let sayac = 1;
for (let index = 0; index < dikdortgenOlanlar.length; index++) {
   
    let dikdortgen = dikdortgenAlan(dikdortgenOlanlar[index],dikdortgenOlanlar[index+1]);
    
    console.log('Dikdortgen Alanları ',sayac,'=> ', dikdortgen);
    index++;
    sayac++;
}




let daireOlanlar = [6,23,19,0,200,156];

for (let index = 0; index < daireOlanlar.length; index++) {
    if (daireOlanlar[index] == 0) {
        console.log( 'Dairenin Alanları ',index+1,'=> degersiz sayi girdiniz.');
    }else{
        let daire = daireAlan(daireOlanlar[index]);

        console.log( 'Dairenin Alanları ',index+1,'=>' ,daire);
    }
}



let kupHacimleri = [2,6,1,4,13, -1]

for (let index = 0; index < kupHacimleri.length; index++) {
    
    let kup = kupHacim(kupHacimleri[index]);

    console.log('Kuplerin Hacimleri',index+1,'=>' ,kup);
}


