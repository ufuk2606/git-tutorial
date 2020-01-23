let sayilar1 = [ 0, 1, 12, 3, 14, 5];
let sayilar2 = [ 10, 11, 12, 9, 14, 5, 28];
let dizi = [];

for (let i = 0; i < sayilar1.length; i++) {
    
    for (let j = 0; j < sayilar2.length; j++) {
        
        if ( sayilar1[i] === sayilar2[j] ) {
            dizi.push(sayilar1[i]);
        }
    }
}
console.log(dizi);