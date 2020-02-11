

function gercekArabalar(araba) {
    
    let bul = araba.filter(x => !x.includes(";)"))
    return bul;
};


function oHarfiOlanArabalar(araba) {
    
    let bul = araba.filter(x => x.includes("o"))
    return bul;
};


function karakterBulma(text, char) {
    let tekTekHaleGetir = text.split("");
    let karakterKontrol = tekTekHaleGetir.filter(function (harf) {
        if (harf == char) {
            return true;
        }
        return false;
    })

    return karakterKontrol.length ;
};


function ikiDefaOHarfiGecenArabalar(araba) {
    let ikiTaneO = karakterBulma(araba, "o");
    if (ikiTaneO == 2) {
        return true;
    }
    return false;
} ;


function isimUzunlugu(araba) {
    let bul = araba.filter(x => x.length < 5)
    return bul;
    
};


function harfDegistirme(araba) {
    let fIleBaslayan = araba.filter(x => x.startsWith("f"));
    let bulDegis = fIleBaslayan.map(x => x.slice(0,-1).concat("x"));
    return bulDegis;
};


function ucIleAltiArasindaOlanlar(araba) {
    let arabaBul = araba.filter(x => x.length < 6 && x.length > 3);
    let icindeAOlanlar = arabaBul.filter(x => x.includes("a") );
    let herbirisine = icindeAOlanlar.map(x => " my favorite "+ x );
    return   herbirisine ;
    
};


function oVeAOlanlar(araba) {
    let bul = araba.filter(x => x.includes("o") && x.includes("a") );
    let deneme = bul.map(x => x.length );
    let asd = deneme.reduce((a,b)=> a+b  );
    return bul +"<br> karakter sayilari toplami "+ asd;
};


function oVeIOlanlar(araba) {
    let oVeyaIleriBul = araba.filter(x => x.includes("o") || x.includes("i") );
    let karakterSayilari = oVeyaIleriBul.map(x => x.length);
    let asd = karakterSayilari.reduce((a,b)=> a+b  );
    return oVeyaIleriBul +"<br>karakter sayilari toplami " +  asd;
    
};


