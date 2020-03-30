//ekranaYaz("Merhaba ben geldim!");
//ekranaYaz("Hosgeldin!");
//let girilenSayi = bilgiAl("Lütfen bir sayi giriniz: ")
//ekranaYaz("girilenSayi: "+ girilenSayi)
let isimler = bilgiAl("Lütfen isimleri giriniz:"); // string
// "Mehmet Rabia Hüseyin"
// Hosgeldin Mehmet!
// Hosgeldin Rabia!
// Hosgeldin Hüseyin!
// tokenizing, parsing

let isimlerArrayi = isimler.split(" ");

for (let index = 0; index < isimlerArrayi.length; index++) {
    const element = isimlerArrayi[index];
    isimlerArrayi[index] = "Hosgeldiniz " + element + "!";
}

ekranaYaz(isimlerArrayi.join("<br>"));

