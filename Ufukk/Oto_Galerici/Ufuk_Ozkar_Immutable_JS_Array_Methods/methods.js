

function gercekArabalar(araba) {
    
    if (araba.includes(';)')) {
        return false;
    }
    return true;
};

function oHarfiOlanArabalar(araba) {
    
    if (araba.includes('o')) {
        return true;
    }
    return false;
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
    if (araba.length < 5) {
        return true;
    }
    return false;
    
};

function harfDegistirme(araba) {
    if (araba.startsWith("f") ) {

        return true;

    }
    return false;
};


function ucIleAltiArasindaOlanlar(araba) {
    let dizi = ("my favorite");
    if ((araba.length > 3) && (araba.length < 6)) {
        if (araba.includes("a")) {
            let yeni =  dizi.concat("",araba);
            return yeni;
        }
        
    }
    return false;
};


function oVeAOlanlar(araba) {
    
    if ((araba.includes("o")) && (araba.includes("a"))) {
        return true;
        
    }
    return false;
};


function oVeIOlanlar(araba) {
    
    if ((araba.includes("o")) && (araba.includes("i"))) {
        return true;
        
    }
    return false;
};