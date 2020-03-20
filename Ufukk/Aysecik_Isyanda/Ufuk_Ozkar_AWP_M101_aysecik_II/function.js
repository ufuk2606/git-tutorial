

function ekranaYaz(pText){
    let output = document.getElementById("output");
    output.innerHTML +=  pText +  "<br>" ;
}

function bilgiAl(ptext) {
    let girilenSayiSayisi =  prompt(ptext).toLowerCase().trim().replace(" ","");
    return girilenSayiSayisi;
}

function rakamaCevir(ptext) {
    let cevir = rakamlarYaziyla.indexOf(ptext);
    return cevir;
}

function ortalamaBulma() {
    let ort = 0;
    for (let index = 0; index < girilenSayilar.length; index++) {
        ort += girilenSayilar[index];
    }
    let sayilarinOrtalamasi = ort / girilenSayilar.length ; 
    return sayilarinOrtalamasi ;
}

function toplama() {
    let top = 0;
    for (let index = 0; index < girilenSayilar.length; index++) {
        top += girilenSayilar[index];
    }
    return top;
}

function carpma() {
    let carp = 1;
    for (let index = 0; index < girilenSayilar.length; index++) {
        carp = carp * girilenSayilar[index] ;
    }
    return carp;
}

function buyukSayi() {
    let buyuk = girilenSayilar[0];
    for (let index = 0; index < girilenSayilar.length; index++) {
        if (girilenSayilar[index] > buyuk) {
            buyuk = girilenSayilar[index];
        }
    }
    return buyuk;
}

function kucukSayi() {
    let kucuk = girilenSayilar[0];
    for (let index = 0; index < girilenSayilar.length; index++) {
        if (girilenSayilar[index] < kucuk) {
            kucuk = girilenSayilar[index];
        }
    }
    return kucuk;
}

function kontrol1(sayi) {
    if (sayi <= 10) {
        return  sayi;
    }
}

function kontrol2(ptext) {
    for (let index = 0; index < rakamlarYaziyla.length; index++) {
        if (ptext == rakamlarYaziyla[index]) {
            return ptext;
        }
    }
}


