
class Yonet{
    
    musteriUret(){
        let musteriler = [];

        let randomSayi = faker.random.number(4) + 1 ;

        for (let index = 0; index < randomSayi; index++) {
            
            let musteriId  =  faker.random.uuid();
            let musteriAdi = faker.name.findName();
            let musteriHedefleri = [];

                let randomSayi2 = faker.random.number(3) + 1 ;
                for (let index = 0; index < randomSayi2; index++) {
                    
                    let hedefId = faker.random.uuid();
                    let hedefAdi = faker.name.findName();
                    let hedefAdresleri = [];

                        let randomSayi3 = faker.random.number(2) + 1 ;
                        for (let index = 0; index < randomSayi3; index++) {
                            
                            let adres = faker.address.streetAddress();
                            hedefAdresleri.push(adres);
                        }

                    let hedef = new Hedef(hedefId, hedefAdi, hedefAdresleri);
                    musteriHedefleri.push(hedef);
                } 

            let musteri = new Musteri(musteriId, musteriAdi, musteriHedefleri);
            musteriler.push(musteri);
            
        }

        return musteriler ;
    }

}