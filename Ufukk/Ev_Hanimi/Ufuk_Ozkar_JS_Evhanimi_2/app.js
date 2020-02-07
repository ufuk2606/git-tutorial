

 let islerim = ["Yataklari düzelt", "(x) Evi süpür", "Camasirlari yika", "(x) Yemegi yap", " Alisverise git", "(x)Cocugu okuldan al"];
 let bitmisIsler = [];
 let bitmemisIsler = [];

for (let index = 0; index < islerim.length; index++) {
    if (islerim[index].startsWith("(x)") === true) {
        
        let aradigimIsaret = "(x)";
        
        let degisen = islerim[index].replace(aradigimIsaret, " ");
        
        bitmisIsler.push(degisen);

    } else {

        bitmemisIsler.push(islerim[index]);
        
    }
    
}


if ( bitmemisIsler.length == 0) {

    console.log("Islerin hepsi bitti mi = EVET");
} else {
    console.log("Islerin hepsi bitti mi = HAYIR");
}


console.log("biten isler = ", bitmisIsler);
console.log("bitmeyen isler = ", bitmemisIsler);

    