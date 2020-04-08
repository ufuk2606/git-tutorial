let isimSiralamaninStatusu = true;
let soyisimSiralamaninStatusu = true ;
let kantonSiralamaninStatusu = true;

class Kisi{
    constructor(isim, soyisim, kanton){
        this.isim = isim ;
        this.soyisim = soyisim ;
        this.kanton = kanton;
        this.kisiler = [];
    };

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

    formuTemizle(){
        dom.verilenIdyiYakala("isim").value = "" ;
        dom.verilenIdyiYakala("soyisim").value = "" ;
        dom.verilenIdyiYakala("kanton").value = "" ;
    }

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

    kantonlariYazdir(){
        let kanton =dom.verilenIdyiYakala("kanton");
        let yazilacakKantonlar = this.kantonlar.map(item =>{
            return `<option value="${item.isim}">${item.isim}</option>`
        }).join();
        kanton.innerHTML = yazilacakKantonlar;
    }

}

class Siralama{
    tabloSiralama(){
        let tablo = dom.verilenIdyiYakala("tablo");
        tablo.addEventListener("click", function(e) {
            if(e.target.id === "isimSiralama"){
                isimSiralamaninStatusu ? this.AdanZyeIsimleriSirala() : this.ZdenAyaIsimleriSirala() ;
                isimSiralamaninStatusu = !isimSiralamaninStatusu ;
            }
            if(e.target.id === "soyisimSiralama"){
                soyisimSiralamaninStatusu ? this.AdanZyeSoyisimleriSirala() : this.ZdenAyaSoyisimleriSirala() ;
                soyisimSiralamaninStatusu = !soyisimSiralamaninStatusu ;
            }
            if(e.target.id === "kantonSiralama"){
                kantonSiralamaninStatusu ? this.AdanZyeKantonlariSirala() : this.ZdenAyaKantonlariSirala() ;
                kantonSiralamaninStatusu = !kantonSiralamaninStatusu ;
            }
        }.bind(this));
    }

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
    verilenIdyiYakala(pId){
        return document.querySelector(`#${pId}`);
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