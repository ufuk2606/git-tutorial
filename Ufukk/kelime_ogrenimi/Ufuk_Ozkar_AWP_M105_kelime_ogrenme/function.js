/**
 * Bu fonksiyon 1-10 arasi rastgele sayi uretir ve Almanca kelimeler dizisinden birini dondurur.
 */
let sayi = 0;
function rastgeleAlmancaKelimeSec() {
    sayi = Math.floor( Math.random() * 10) ;
    let kelime = almancaKelimeler[sayi];
    return kelime ;
}

/**
 * Bu fonksiyon secilen Almanca kelimenin karsiligini secer 
 */
let kelime = "";
function kelimeninDogruTurkceKarsiligi() {
    kelime = turkceKelimeler[sayi];
    return eklemeYap(kelime)  ;
}

/**
 * Bu fonksiyon yanlis kelime uretir
 */
function kelimeninYanlisTurkceKarsiligi() {
    let sayi = Math.floor( Math.random() * 10) ;
    let yanliskelime = turkceKelimeler[sayi];
    if (yanliskelime !== kelime) {
        return eklemeYap(yanliskelime)  ;
    } else {
        return kelimeninYanlisTurkceKarsiligi();
    }
}

/**
 * Bu fonksiyon Almaca kelimeyi HTML de id ile yakalayip yerine yazdirir
 */
function almancaKelimeyiYazdir() {
    let almancaKelimeninYeri = document.querySelector('#almanca-kelimeler');
    almancaKelimeninYeri.innerHTML = rastgeleAlmancaKelimeSec() ;
    kelimeninDogruTurkceKarsiligi();
    kelimeninYanlisTurkceKarsiligi();
    kelimeninYanlisTurkceKarsiligi();
    kelimeninYanlisTurkceKarsiligi();
    turkceKelimeleriYazdir();
}

/**
 * Bu fonksiyon cevaplari yazdirir.
 */
function turkceKelimeleriYazdir() {
    let dogruCevabinYeri = document.querySelector('#cevaplar') ;
    dogruCevabinYeri.innerHTML  =  degerlerinGozukmesiIcinOlanListe.map(kelime => `<li><h3>${kelime.almancaKelime}</h3></li>`).join("");
}

/**
 * Bu fonksiyon liste seklinde olan cevaplari dinler ve tiklandiginda yapilacak olanlari yaptiracakti ama yetismedi
 */
function dogruYanlisCevaplarinGozukmesi() {
    let cevaplar = document.querySelector('#cevaplar');
    cevaplar.addEventListener("click", function () {
        
    })
}

/**
 * Bu fonksiyon yeni bir class olustrup daha sonra kullanmak uzere baska bir diziye gonderir.
 * @param {*} kelime 
 */                                                                                // Burada isler biraz karisti. Yada duzelecekti ben de anlamaya calisiyorum ne yaptigimi
function eklemeYap(kelime){
    let eklenecekDeger = new AlmancaTurkceKelimeler(kelime, false);                
    degerlerinGozukmesiIcinOlanListe.push(eklenecekDeger);
}