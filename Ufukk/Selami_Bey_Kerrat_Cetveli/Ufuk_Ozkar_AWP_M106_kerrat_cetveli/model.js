class Kisi{
    constructor(adi, skor){
        this.adi = adi ;
        this.skor = skor ;
        this.kisiler = [];
    };

    yeniKisiOlustur(){
        let buton = dom.getElementById("buton");
        buton.addEventListener("onclick", function(){
            let isim = dom.getElementById("isim").value;
            let puan = 0 ;
            let yeniKisi = new Kisi( isim, puan );
            this.kisiler.push(yeniKisi);
            this.inputuTemizle();
            this.tabloyuGuncelle(this.kisiler);
        }.bind(this));
    }

    inputuTemizle(){
        dom.getElementById("isim").value = "" ;
    }

    tabloyuGuncelle(pKisi){
        let tabloBody = dom.getElementById("tablo-body");
        let yazilacakIsimListesi = pKisi.map(item =>{
            return `<tr>
                        <td scope="col">${item.adi}</td>
                        <td scope="col">${item.skor}</td>
                        <td><button type="submit" class="btn btn-primary" id=${item.adi}>Basla</button></td>
                    </tr>`
        }).join("");
        tabloBody.innerHTML = yazilacakIsimListesi ;
    }

    oyunaBasla(){
        let baslamaButonu = dom.getElementById("Ali");
        baslamaButonu.addEventListener("onclick", function(){
            let ilkSayi = this.rastgeleSayiUret();
            let ikinciSayi = this.rastgeleSayiUret();
            dom.getElementById("ilk-sayi").innerHTML = ilkSayi ;
            dom.getElementById("ikinci-sayi").innerHTML = ikinciSayi ;
            this.cevapKontrol( ilkSayi, ikinciSayi);
        }.bind(this));
    }

    cevapKontrol( sayi1, sayi2 ){
        let kontrol = dom.getElementById("kontrol-et");
        kontrol.addEventListener("click", function(){
            let girilenCevap = dom.getElementById("girilen-cevap").value;
            let alininSkoru = dom.getElementById("alinin-skor");
            let dogruCevap = sayi1 * sayi2 ;
            if( dogruCevap == girilenCevap ){
                alininSkoru += 10 ;
                dom.getElementById("dogru-cevap-mesaji").innerHTML = `Dogru bildiniz.`;
            }else{
                dom.getElementById("dogru-cevap-mesaji").innerHTML = `Dogru cevap = ${dogruCevap}`;
            }
        });
    }

    ilerle(){
        let ilerle = dom.getElementById("ilerle");
        ilerle.addEventListener("click", function(){
            this.oyunaBasla();
        }.bind(this));
    }

    rastgeleSayiUret(){
        return Math.floor( Math.random() * 10);
    }

}

class Manager{
    start(){
        kisi.yeniKisiOlustur();
        kisi.oyunaBasla();
        kisi.ilerle();
    }
}