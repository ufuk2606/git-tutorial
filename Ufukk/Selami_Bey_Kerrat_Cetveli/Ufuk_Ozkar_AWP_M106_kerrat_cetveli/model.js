class Kisi{
    constructor(adi, skor){
        this.adi = adi ;
        this.skor = skor ;
        this.kisiler = [];
    };

    yeniKisiOlustur(){
        let isim = dom.getElementById("isim").value;
        let puan = 0 ;
        let yeniKisi = new Kisi( isim, puan );
        kisi.kisiler.push(yeniKisi);
        kisi.inputuTemizle();
        kisi.tabloyuGuncelle(kisi.kisiler);
    }

    inputuTemizle(){
        dom.getElementById("isim").value = "" ;
    }

    tabloyuGuncelle(pKisi){
        let tabloBody = dom.getElementById("tablo-body");
        let yazilacakIsimListesi = pKisi.map(item =>{
            return `<tr><td>${item.adi}</td><td class="${item.adi}">${item.skor}</td><td><button type="button" class="btn btn-primary" id="${item.adi}">Soruyu Degistir</button></td></tr>`
        }).join("");
        tabloBody.innerHTML = yazilacakIsimListesi ;
    }

    oyunaBasla(e){
        if(e.target.className == "btn btn-primary"){    
            let id = e.target.id ;
            let seciliKisi = kisi.verilenIdyiItemOlarakAl(id);
            let ilkSayi = kisi.rastgeleSayiUret();
            let ikinciSayi = kisi.rastgeleSayiUret();
            dom.getElementById("ilk-sayi").innerHTML = ilkSayi ;
            dom.getElementById("ikinci-sayi").innerHTML = ikinciSayi ;
            kisi.cevapKontrol(seciliKisi , ilkSayi, ikinciSayi);
            kisi.ilerle(seciliKisi);
        }
    }

    cevapKontrol(seciliKisi, sayi1, sayi2 ){
        let kontrol = dom.getElementById("kontrol-et");
        kontrol.addEventListener("click", function(){
            let girilenCevap = dom.getElementById("girilen-cevap").value;
            let dogruCevap = sayi1 * sayi2 ;
            if( dogruCevap == girilenCevap ){
                seciliKisi.skor += 10;
                dom.getElementByClassName(`${seciliKisi.adi}`).innerHTML = seciliKisi.skor ;
                dom.getElementById("dogru-cevap-mesaji").innerHTML = `Dogru bildiniz.`;
            }else{
                dom.getElementById("dogru-cevap-mesaji").innerHTML = `Dogru cevap = ${dogruCevap}`;
            }
            dom.getElementById("girilen-cevap").value = "";
        });
    }

    verilenIdyiItemOlarakAl(id) {
        let seciliKisi;
        kisi.kisiler.forEach(item => {
            if(item.adi == id ){               
                seciliKisi = item;
            }
        });
        return seciliKisi;
    }

    // ilerle(){
    //     dom.getElementById("dogru-cevap-mesaji").innerHTML = "";
    //     dom.getElementById("girilen-cevap").value = "";
    //     kisi.oyunaBasla;
    // }

    rastgeleSayiUret(){
        return Math.floor( Math.random() * 10);
    }

}

class Manager{
    start(){
        dom.getElementById("buton").addEventListener("click", kisi.yeniKisiOlustur) ;
        dom.getElementById("tablo-body").addEventListener("click", kisi.oyunaBasla) ;
        //dom.getElementById("ilerle").addEventListener("click", kisi.ilerle) ;
    }
}