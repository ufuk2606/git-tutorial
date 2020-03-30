let sayi = 0;
function rastgeleAlmancaKelimeSec() {
    sayi = Math.floor( Math.random() * 10) ;
    let kelime = almancaKelimeler[sayi];
    return kelime ;
}

let kelime = "";
function kelimeninDogruTurkceKarsiligi() {
    kelime = turkceKelimeler[sayi];
    return eklemeYap(kelime)  ;
}

function kelimeninYanlisTurkceKarsiligi() {
    let sayi = Math.floor( Math.random() * 10) ;
    let yanliskelime = turkceKelimeler[sayi];
    if (yanliskelime !== kelime) {
        return eklemeYap(yanliskelime)  ;
    } else {
        return kelimeninYanlisTurkceKarsiligi();
    }
}

function almancaKelimeyiYazdir() {
    let almancaKelimeninYeri = document.querySelector('#almanca-kelimeler');
    almancaKelimeninYeri.innerHTML = rastgeleAlmancaKelimeSec() ;
    kelimeninDogruTurkceKarsiligi();
    kelimeninYanlisTurkceKarsiligi();
    kelimeninYanlisTurkceKarsiligi();
    kelimeninYanlisTurkceKarsiligi();
    turkceKelimeleriYazdir();
}

function turkceKelimeleriYazdir() {
    let dogruCevabinYeri = document.querySelector('#cevaplar') ;
    dogruCevabinYeri.innerHTML  =  degerlerinGozukmesiIcinOlanListe.map(kelime => `<li><h3>${kelime.almancaKelime}</h3></li>`).join("");
}

function dogruYanlisCevaplarinGozukmesi() {
    let cevaplar = document.querySelector('#cevaplar');
    cevaplar.addEventListener("click", function () {
        
    })
}


function eklemeYap(kelime){
    let eklenecekDeger = new AlmancaTurkceKelimeler(kelime, false);
    degerlerinGozukmesiIcinOlanListe.push(eklenecekDeger);
}