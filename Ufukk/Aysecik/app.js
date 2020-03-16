
const rakamlarYaziyla = ["sifir", "bir", "iki", "uc", "dort", "bes", "alti", "yedi", "sekiz", "dokuz"] ;
const rakamlarSayiyla = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9] ;

let girilenSayi =  prompt("Lutfen ondan kucuk bir sayiyi yaziyla giriniz :");

for (let index = 0; index < rakamlarYaziyla.length; index++) {
    if (girilenSayi == rakamlarYaziyla[index]) {
        let sonuc = 10 - rakamlarSayiyla[index] ;
        ekranaYaz(`On sayisinin ${girilenSayi} sayisindan farki = ${rakamlarYaziyla[sonuc]} `  );
        break ;
    } else {
        ekranaYaz(`Lutfen girilen sayiyi kontrol ediniz.. <br><br> Girilen Sayi : ${girilenSayi}`);
    }
}
