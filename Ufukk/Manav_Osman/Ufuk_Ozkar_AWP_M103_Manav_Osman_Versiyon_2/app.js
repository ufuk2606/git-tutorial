
let urunler = ".urunler" ;

let siparisler = ".siparisler" ;

let urunBilgisi = ['Elma', 'Armut', 'Sogan', 'Karpuz', 'Patates', 'Muz', 'Mantar'] ;

let siparislerBilgisi = [];

urunleriHtmldeUrunlerKisminaSecmeVeYazdirma(urunBilgisi);

let secilenUrun = document.querySelector('.urunler');
secilenUrun.addEventListener('click', siparislerBilgisineGonderme ) ;

urunleriHtmldeSiparislerKisminaYazdirma(siparislerBilgisi);

let secilenSiparis = document.querySelector('.siparisler');
secilenSiparis.addEventListener('click', siparislerBilgisindenSilme ) ;
