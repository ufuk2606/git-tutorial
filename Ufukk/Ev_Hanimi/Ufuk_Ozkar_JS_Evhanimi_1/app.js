let islerim = ["Yataklari düzelt", "(x) Evi süpür", "(x) Camasirlari yika", "Yemegi yap", "(x) Alisverise git", "Cocugu okuldan al"];

let bitmis = [];
let bitmemis = [];


bitmis.push(EvHanimi.isaretOlan(islerim));

bitmemis.push(EvHanimi.isaretOlmayan(islerim));

output("<br>Biten Isler => " + bitmis);

output("<br>Kalan Isler => " + bitmemis);

if (EvHanimi.kontrol(islerim)){
    output("<br>Isler bitti mi => EVET")
}else {
    output("<br>Isler bitti mi => HAYIR")
}