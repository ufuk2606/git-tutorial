

let cars = ["audi", "bmw", "ford", "opel", "fiat", "honda", "toyota", "renault", "tesla", "volvo", "skoda", "nissan", "ferrari", "vw", "alfa romeo", "mitsubishi", "TOGG;)"];


let arabalar = gercekArabalar(cars);
ekranaYazdir("<strong> Araba karakteri tasiyan arabalar </strong><br> " + arabalar);


let oHarfiGecenler = oHarfiOlanArabalar(arabalar);
ekranaYazdir("<br><br><strong>Icinde 'o' harfi gecen arabalar ve bu arabalarin sayisi </strong><br>" + oHarfiGecenler +"    <strong>sayisi = </strong>" + oHarfiGecenler.length);


let ikiDefaOGecenler = arabalar.filter(ikiDefaOHarfiGecenArabalar);
ekranaYazdir("<br><br><strong>Icinde iki defa 'o' harfi gecen arabalarin sayisi </strong><br>" + ikiDefaOGecenler.length);


let arabaIsimUzunlugu = isimUzunlugu(arabalar);
ekranaYazdir("<br><br><strong>Araba isim uzunlugu 5'ten kücük olan arabalar </strong><br>" + arabaIsimUzunlugu);


let ilkHarfiFOlanlar = harfDegistirme(arabalar);
ekranaYazdir("<br><br><strong>Ilk harfi 'f' olan arabalarin son harfi x </strong><br>" + ilkHarfiFOlanlar);


let ucIleAltiArasi = ucIleAltiArasindaOlanlar(arabalar);
ekranaYazdir("<br><br><strong>Uzunlugu 3 ile 6 arasinda olan arabalardan isminin icinde 'a' harfi olanlari, isimlerinin önüne 'my favorite ' </strong><br>" + ucIleAltiArasi);


let oVeA = oVeAOlanlar(arabalar);
ekranaYazdir("<br><br><strong>Ismi icinde 'o' ve 'a' gecen arabalari toplam karakter sayisi </strong><br>" + oVeA ); 


let oVeI = oVeIOlanlar(arabalar);
ekranaYazdir("<br><br><strong>Ismi icinde 'o' veya 'i' gecen arabalari toplam karakter sayisi </strong><br>" + oVeI);


ekranaYazdir("<br><br><strong>find() methodu ile filter() method arasindaki fark </strong><br> find metoduna bir fonksiyon uygulanir ve bu fonksiyona uyan ilk elemani geri dondurur. Ama filter metoduna bir foksiyon uygularsak bu fonsiyona uyan tum elemanlari dondurur ve bunlardan yeni bir dizi olusturur. ");

