 

function daireAlan(r) {
    let sayi = Math. round(Math.PI)  * Math.pow(r, 2);
    return sayi;
}


function dikdortgenAlan(a, b) {
    if ( b == undefined ) {
        return 'eksik bilgi..'
    }else{
        let sayi = a * b;
        return sayi;
    }
}


function daireCevre(r) {
    let sayi = 2 * Math. round(Math.PI) * r;
    return sayi;
}


function dikdortgenCevre(a, b) {
    let sayi = 2 * (a + b);
    return sayi;
}


function kupHacim(x) {
    if (x < 0) {
        return 'yanlis deger girdiniz..';
    }else{
        let sayi = Math.pow(x,3);
        return sayi;
    }
    
}


function kupAlan(x) {
    let sayi = 6 * Math.pow(x,2);
    return sayi;
}





