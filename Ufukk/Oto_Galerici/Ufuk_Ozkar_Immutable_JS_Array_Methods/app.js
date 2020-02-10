

let cars = ["audi", "bmw", "ford", "opel", "fiat", "honda", "toyota", "renault", "tesla", "volvo", "skoda", "nissan", "ferrari", "vw", "alfa romeo", "mitsubishi", "TOGG;)"];


let arabalar = cars.filter(gercekArabalar);
ekranaYazdir("<strong> Araba karakteri tasiyan arabalar </strong><br> " + arabalar);


let oHarfiGecenler = arabalar.filter(oHarfiOlanArabalar);
ekranaYazdir("<br><br><strong>Icinde 'o' harfi gecen arabalar ve bu arabalarin sayisi </strong><br>" + oHarfiGecenler +"    <strong>sayisi = </strong>" + oHarfiGecenler.length);


let ikiDefaOGecenler = arabalar.filter(ikiDefaOHarfiGecenArabalar);
ekranaYazdir("<br><br><strong>Icinde iki defa 'o' harfi gecen arabalarin sayisi </strong><br>" + ikiDefaOGecenler.length);


let arabaIsimUzunlugu = arabalar.filter(isimUzunlugu);
ekranaYazdir("<br><br><strong>Araba isim uzunlugu 5'ten kücük olan arabalar </strong><br>" + arabaIsimUzunlugu);


let ilkHarfiFOlanlar = arabalar.filter(harfDegistirme);
ekranaYazdir("<br><br><strong>Ilk harfi 'f' olan arabalarin son harfi x </strong><br>" + ilkHarfiFOlanlar);


let ucIleAltiArasi = arabalar.filter(ucIleAltiArasindaOlanlar);
ekranaYazdir("<br><br><strong>Uzunlugu 3 ile 6 arasinda olan arabalardan isminin icinde 'a' harfi olanlari, isimlerinin önüne 'my favorite ' </strong><br>" + ucIleAltiArasi);


let oVeA = arabalar.filter(oVeAOlanlar);
ekranaYazdir("<br><br><strong>Ismi icinde 'o' ve 'a' gecen arabalari toplam karakter sayisi </strong><br>" +oVeA);


let oVeI = arabalar.filter(oVeIOlanlar);
ekranaYazdir("<br><br><strong>Ismi icinde 'o' ve 'i' gecen arabalari toplam karakter sayisi </strong><br>" + oVeI);


/*
4) Ilk harfi "f" olan arabalarin son harfini x olarak degistirin.
5) Uzunlugu 3 ile 6 arasinda olan arabalardan isminin icinde "a" harfi olanlari, isimlerinin önüne "my favorite " gelecek sekilde degistirin ve lsiteleyin.
6) Ismi icinde "o" ve "a" gecen arabalari toplam karakter sayisini bulunuz.
7) Ismi icinde "o" veya "i" gecen arabalari toplam karakter sayisini bulunuz.
8) find() methodu ile filter() method arasindaki farklari yazin.*/