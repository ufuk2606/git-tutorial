let islerim = ["Yataklari düzelt", "(x) Evi süpür", "(x) Camasirlari yika", "Yemegi yap", "(x) Alisverise git", "Cocugu okuldan al"];

let bitmis = [];
let bitmemis = [];


bitmis.push(isaretOlan(islerim));

bitmemis.push(isaretOlmayan(islerim));

console.log("Biten Isler => ", bitmis);

console.log("Kalan Isler => ", bitmemis);

if (kontrol(islerim)){
    console.log("Isler bitti mi => EVET")
}else {
    console.log("Isler bitti mi => HAYIR")
}