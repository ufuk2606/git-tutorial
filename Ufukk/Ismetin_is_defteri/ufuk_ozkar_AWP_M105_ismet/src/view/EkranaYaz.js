class EkranaYaz{
    musterileriYaz(pMusteriler){
        let yazilacak = pMusteriler.map(musteri => {
            return `<p>${musteri.id}>${musteri.isim}>${musteri.hedef}</p>`
        }).join("") ;
        console.log(yazilacak);
     dom.getElementById(musteri).innerHTML = yazilacak ;   
    }
}