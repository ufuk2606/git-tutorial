
class Kisi{
    constructor(isim, soyisim, kanton){
        this.isim = isim ;
        this.soyisim = soyisim ;
        this.kanton = kanton;
        this.kisiler = [];
    };
    /**
     * Bu fonksiyon, Kaydet butonuna tiklandiginda formdaki bilgilerle yeni bir kisi olusturur.
     * Kayit sonrasi formu temizler
     * Kayitli kisileri tabloya yazdirir.
     */
    yeniKisiOlustur(){
        let buton = dom.verilenIdyiYakala("buton");
        buton.addEventListener("click", function() {
            let isim = dom.verilenIdyiYakala("isim").value ;
            let soyisim = dom.verilenIdyiYakala("soyisim").value;
            let kanton = dom.verilenIdyiYakala("kanton").value;
            let yeniKisi = new Kisi(isim, soyisim, kanton);
            this.kisiler.push(yeniKisi);
            this.formuTemizle();
            this.tabloyaYazdir(this.kisiler); 
        }.bind(this));
    }
    /**
     * Bu fonksiyon formu temizler.
     */
    formuTemizle(){
        dom.verilenIdyiYakala("isim").value = "" ;
        dom.verilenIdyiYakala("soyisim").value = "" ;
        dom.verilenIdyiYakala("kanton").value = "" ;
    }
    /**
     * Bu fonksiyon kendine gonderilen parametredeki kisinin isim, soyisim ve kantona gore ilgili alanlara yazdirir.
     * @param {*} pKisi 
     */
    tabloyaYazdir(pKisi){
        let tbody = dom.verilenIdyiYakala("tbody");
        let yazilacak = pKisi.map(item =>{
            return `<tr><td>${item.isim}</td><td>${item.soyisim}</td><td>${item.kanton}</td></tr>`}).join("") ;
        tbody.innerHTML = yazilacak ;
    }

}

class Kanton{
    constructor(){
        this.kantonlar = [
        { isim : "Vaud" },
        { isim : "Bern" },
        { isim : "Luzern" },
        { isim : "Uri" },
        { isim : "Schwyz" },
        { isim : "Obwalden" },
        { isim : "Nidwalden" },
        { isim : "Glarus" },
        { isim : "Zug" },
        { isim : "Friborg"},
        { isim : "Solothurn"},
        { isim : "Basel" },
        { isim : "Schaffhausen"},
        { isim : "Appenzell" },
        { isim : "St. Gallen"},
        { isim : "Graubünden"},
        { isim : "Aargau"},
        { isim : "Thurgau"},
        { isim : "Ticino" },
        { isim : "Zurih" },
        { isim : "Valais"},
        { isim : "Cenevre" },
        { isim : "Jura"}
        ]
    }
    /**
     * Bu fonksiyon Dom daki ilgili yere kantonlari yazdirir.
     */
    kantonlariYazdir(){
        let kanton =dom.verilenIdyiYakala("kanton");
        let yazilacakKantonlar = this.kantonlar.map(item =>{
            return `<option value="${item.isim}">${item.isim}</option>`
        }).join();
        kanton.innerHTML = yazilacakKantonlar;
    }

}

class Siralama{
    /**
     * Bu fonksiyon tablodaki isim, soyisim ve kanton bilgilerini (A dan Z ye ve tersine) siralama yapar.
     */
    tabloSiralama(){
        let tablo = dom.verilenIdyiYakala("tablo");
        tablo.addEventListener("click", function(e) {
            if(e.target.id === "isimSiralama"){
                statuler.isimSiralamaninStatusu ? this.AdanZyeIsimleriSirala() : this.ZdenAyaIsimleriSirala() ;
                statuler.isimSiralamaninStatusu = !statuler.isimSiralamaninStatusu ;
            }
            if(e.target.id === "soyisimSiralama"){
                statuler.soyisimSiralamaninStatusu ? this.AdanZyeSoyisimleriSirala() : this.ZdenAyaSoyisimleriSirala() ;
                statuler.soyisimSiralamaninStatusu = !statuler.soyisimSiralamaninStatusu ;
            }
            if(e.target.id === "kantonSiralama"){
                statuler.kantonSiralamaninStatusu ? this.AdanZyeKantonlariSirala() : this.ZdenAyaKantonlariSirala() ;
                statuler.kantonSiralamaninStatusu = !statuler.kantonSiralamaninStatusu ;
            }
        }.bind(this));
    }
    /**
     * A dan Z ye isimleri siralar.
     */
    AdanZyeIsimleriSirala() {
        kisi.kisiler = kisi.kisiler.sort(function(a, b){
            var x = a.isim.toLowerCase();
            var y = b.isim.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        kisi.tabloyaYazdir(kisi.kisiler);
    }
    /**
     * Z den A ya isimlari siralar.
     */
    ZdenAyaIsimleriSirala() {
        kisi.kisiler = kisi.kisiler.sort(function(a, b){
            var x = b.isim.toLowerCase();
            var y = a.isim.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        kisi.tabloyaYazdir(kisi.kisiler);
    }
    /**
     * A dan Z ye soyisimleri siralar.
     */
    AdanZyeSoyisimleriSirala() {
        kisi.kisiler = kisi.kisiler.sort(function(a, b){
            var x = a.soyisim.toLowerCase();
            var y = b.soyisim.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        kisi.tabloyaYazdir(kisi.kisiler);
    }
    /**
     * Z den A ya soyisimlari siralar.
     */
    ZdenAyaSoyisimleriSirala() {
        kisi.kisiler = kisi.kisiler.sort(function(a, b){
            var x = b.soyisim.toLowerCase();
            var y = a.soyisim.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        kisi.tabloyaYazdir(kisi.kisiler);
    }
    /**
     * A dan Z ye kantonlari siralar.
     */
    AdanZyeKantonlariSirala() {
        kisi.kisiler = kisi.kisiler.sort(function(a, b){
            var x = a.kanton.toLowerCase();
            var y = b.kanton.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        kisi.tabloyaYazdir(kisi.kisiler);
    }
    /**
     * Z den A ya kantonlari siralar.
     */
    ZdenAyaKantonlariSirala() {
        kisi.kisiler = kisi.kisiler.sort(function(a, b){
            var x = b.kanton.toLowerCase();
            var y = a.kanton.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        kisi.tabloyaYazdir(kisi.kisiler);
    }
}

class Arama{
    /**
     * Bu fonksiyon, arama kutusuna girilen karakter veya kelimelere gore isim ve soyisim sütunlarında filtreleme yapar.
     */
    filtreleme(){
        let aramaBolumu = dom.verilenIdyiYakala("tablonun-ustunun-sagi");
        aramaBolumu.addEventListener("click", function(e) {
            if(e.target.className === "fab fa-searchengin"){
                let filtre = dom.verilenIdyiYakala("arama").value.toLowerCase();
                let arananKisiler = kisi.kisiler.filter(item=>{
                let isim = item.isim.toLowerCase();
                let soyisim = item.soyisim.toLowerCase();
                return isim.includes(filtre) || soyisim.includes(filtre);
                });
                kisi.tabloyaYazdir(arananKisiler);
            }
        });
    }
}

class Dom{
    /**
     * Bu fonksiyon kendine gonderilen parametreyle Html de ilgili id yi yakalar.
     * @param {*} pId 
     */
    verilenIdyiYakala(pId){
        return document.querySelector(`#${pId}`);
    }
}

class Statuler{
    constructor(){
        this.isimSiralamaninStatusu = true;
        this.soyisimSiralamaninStatusu = true ;
        this.kantonSiralamaninStatusu = true;
    }
}

class Manager{
    start(){
        kanton.kantonlariYazdir();
        kisi.yeniKisiOlustur();
        siralama.tabloSiralama();
        arama.filtreleme();
    }
}