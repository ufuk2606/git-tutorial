
let dom = new DOM();
let ekranaYaz = new EkranaYaz();
let yonet = new Yonet();

let musteri = yonet.musteriUret();
ekranaYaz.musterileriYaz(musteri);