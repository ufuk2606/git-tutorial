/* bu foksiyon id si muz olan elemani daha once olusturdugumuz siparisler dizisine gonderiyor.
    dizi icinde alfabetik siralama yaptiktan sonra bu diziyi sagdaki alanda yazdiriyor. bu sirada
    soldaki alandaki elemanin yazisini siliyor. */ 
function siparislereYazMuz() {
    siparisler.push(muz.value) ;
    siparisler.sort(); 
    document.querySelector("#muz").innerHTML = "" ;
    document.querySelector("#siparisler").innerHTML = siparisler  ;
}

/* bu foksiyon id si cilek olan elemani daha once olusturdugumuz siparisler dizisine gonderiyor.
    dizi icinde alfabetik siralama yaptiktan sonra bu diziyi sagdaki alanda yazdiriyor. bu sirada
    soldaki alandaki elemanin yazisini siliyor. */ 
function siparislereYazCilek() {
    siparisler.push(cilek.value) ; 
    siparisler.sort(); 
    document.querySelector("#cilek").innerHTML = "";
    document.querySelector("#siparisler").innerHTML = siparisler  ;
}

/* bu foksiyon id si patates olan elemani daha once olusturdugumuz siparisler dizisine gonderiyor.
    dizi icinde alfabetik siralama yaptiktan sonra bu diziyi sagdaki alanda yazdiriyor. bu sirada
    soldaki alandaki elemanin yazisini siliyor. */ 
function siparislereYazPatates() {
    siparisler.push(patates.value) ; 
    siparisler.sort(); 
    document.querySelector("#patates").innerHTML = "";
    document.querySelector("#siparisler").innerHTML = siparisler ;
}

/* bu foksiyon id si armut olan elemani daha once olusturdugumuz siparisler dizisine gonderiyor.
    dizi icinde alfabetik siralama yaptiktan sonra bu diziyi sagdaki alanda yazdiriyor. bu sirada
    soldaki alandaki elemanin yazisini siliyor. */ 
function siparislereYazArmut() {
    siparisler.push(armut.value) ; 
    siparisler.sort(); 
    document.querySelector("#armut").innerHTML = "";
    document.querySelector("#siparisler").innerHTML = siparisler ;
}

/* bu foksiyon id si mantar olan elemani daha once olusturdugumuz siparisler dizisine gonderiyor.
    dizi icinde alfabetik siralama yaptiktan sonra bu diziyi sagdaki alanda yazdiriyor. bu sirada
    soldaki alandaki elemanin yazisini siliyor. */ 
function siparislereYazMantar() {
    siparisler.push(mantar.value) ; 
    siparisler.sort(); 
    document.querySelector("#mantar").innerHTML = "";
    document.querySelector("#siparisler").innerHTML = siparisler ;
}

/* bu foksiyon id si uzum olan elemani daha once olusturdugumuz siparisler dizisine gonderiyor.
    dizi icinde alfabetik siralama yaptiktan sonra bu diziyi sagdaki alanda yazdiriyor. bu sirada
    soldaki alandaki elemanin yazisini siliyor. */ 
function siparislereYazUzum() {
    siparisler.push(uzum.value) ; 
    siparisler.sort(); 
    document.querySelector("#uzum").innerHTML = "";
    document.querySelector("#siparisler").innerHTML = siparisler ;
}