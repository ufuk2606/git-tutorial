
function urunleriHtmldeUrunlerKisminaSecmeVeYazdirma() {
    let yazilacakMenu = urunBilgisi.map(urun => {return ` <li id="${urun}" class="${urun}" >${urun}</li> ` }).join('');

    document.querySelector('.urunler').innerHTML = yazilacakMenu;
}

function urunleriHtmldeSiparislerKisminaYazdirma() {
    let yazilacakSiparisler = siparislerBilgisi.map(urun => {return ` <li id="${urun}" class="${urun}" >${urun}</li> ` }).sort().join('');

    document.querySelector('.siparisler').innerHTML = yazilacakSiparisler;
}

function siparislerBilgisineGonderme(e) {
    let secilenEleman = e.target.className;
    siparislerBilgisi.push(secilenEleman);

    urunleriHtmldeSiparislerKisminaYazdirma();
}

/*********  Silme kisminda problem var. Istenilen urunu silmiyor.**********/

function siparislerBilgisindenSilme(e) {
    let secilenEleman = e.target.className;
    let silinecekEleman = secilenEleman.indexOf();

    siparislerBilgisi.splice(siparislerBilgisi[silinecekEleman],1);

    urunleriHtmldeSiparislerKisminaYazdirma();
}
