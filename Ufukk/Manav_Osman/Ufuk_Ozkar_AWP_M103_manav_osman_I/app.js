/* Programda genel olarak sol alan da bulunan elemanlari sagdaki alana tasiyor. buradaki 
    komutlarda querySelector ile yakalayip click olayinda belirli olan fonksiyona yonlendirdim */

    let siparisler = [];

let muz = document.querySelector("#muz");
muz.addEventListener("click" , siparislereYazMuz )

let cilek = document.querySelector("#cilek");
cilek.addEventListener("click" , siparislereYazCilek)

let patates = document.querySelector("#patates");
patates.addEventListener("click" , siparislereYazPatates)

let armut = document.querySelector("#armut");
armut.addEventListener("click" , siparislereYazArmut)

let mantar = document.querySelector("#mantar");
mantar.addEventListener("click" , siparislereYazMantar)

let uzum = document.querySelector("#uzum");
uzum.addEventListener("click" , siparislereYazUzum)

