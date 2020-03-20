
const rakamlarYaziyla = ["sifir", "bir", "iki", "uc", "dort", "bes", "alti", "yedi", 
                        "sekiz", "dokuz", "on", "onbir", "oniki", "onuc", "ondort", "onbes"] ;   // Rakamlari yaziyla tanimladim.

let girilenSayiSayisi =  bilgiAl("Kac tane sayi gireceksiniz (Lutfen yaziyla giriniz) :"); //Prompt ile kac sayi girileceginin bilgisini aldim. buyuk harf ve bosluklara dikkat ettim. fonksiyon kisminda duzelttim.

let rakamOLarakDegeri = rakamaCevir(girilenSayiSayisi);                           //girilen sayiyi indexOf metodu ile yerini belirleyip rakama cevirdim

let girilenSayilar = [];                                                          //eklenecek sayilar icin bos bir dizi olusturdum.


if (kontrol1(rakamOLarakDegeri) && kontrol2(girilenSayiSayisi)) {                 // girilen sayinin adetinin 10 dan fazla olup olmadigini ve 1 ile 15 arasi olup olmadiginin kontrolunu yaptim  
    for (let index = 0; index < rakamOLarakDegeri; index++) {                     //girilecek sayilari almak icin girilen sayi kadar donguye aldim
        let eklenecekSayilar = bilgiAl(`Lutfen ${index +1 }. sayiyi giriniz.`);   //girilen sayilari aldim
        if (kontrol2(eklenecekSayilar)) {                                         // her girilen sayinin kontrolunu yaptim
            let rakamaDonusturupGonderme = rakamaCevir(eklenecekSayilar);         // girilen sayilari rakama cevirdim.
            girilenSayilar.push(rakamaDonusturupGonderme);                        // sayilari olusturdugum diziye gonderdim.
        }else{
            alert ('Lutfen girilen degeri kontrol ediniz.') ;                     //yanlis deger icin uyari verdim
            break;                                                      // ve donguden cikmasi istedim ki diger sayilari almaya devam etmesin
        }
    }
} else {
    alert ('Lutfen girilen degeri kontrol ediniz.') ;                             //yanlis deger icin uyari verdim
}


ekranaYaz(`Kac sayi girildi = ${girilenSayilar.length}`);                         // ekrana yazdirdim
ekranaYaz(`Girilen Sayilar = ${girilenSayilar}`); 
ekranaYaz(`Girilen Sayilarin Ortalamasi = ${ortalamaBulma(girilenSayilar)}`);
ekranaYaz(`Girilen Sayilarin Toplami = ${toplama(girilenSayilar)}`);
ekranaYaz(`Girilen Sayilarin Carpimi = ${carpma(girilenSayilar)}`);
ekranaYaz(`Girilen Sayilarin En Buyugu = ${buyukSayi(girilenSayilar)}`);
ekranaYaz(`Girilen Sayilarin En Kucugu = ${kucukSayi(girilenSayilar)}`);



/******************************************
 * hata kontrolunu yaparken zorlandim. Muhtemelen istenilen gibi olmadi.
 * CSS kisminda da zorlaniyorum ve zayif oldugumu dusunuyorum.
 ******************************************/