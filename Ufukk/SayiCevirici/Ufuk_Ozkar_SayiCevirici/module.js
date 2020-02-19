class SayiOkuma{
    sayi ;

    constructor(pSayi){

        this.sayi= String(pSayi).split("")  ;

    }
    
    girilenSayi(){
        
        let birler = ["sifir", "bir", "iki", "uc", "dort", "bes", "alti", "yedi", "sekiz", "dokuz"];
        let onlar = ["on", "yirmi", "otuz", "kirk", "elli", "altmis", "yetmis", "seksen", "doksan"];

        for (let index = 0; index <  birler.length; index++) {
            if (this.sayi.length == 1 && this.sayi[0] == index ){
                 this.sayi[0] = birler[index];
                 this.sayi = this.sayi.join("");
                 return this.sayi ;
                 
            }               
        }

        for (let index = 0; index < onlar.length; index++) {
            if (this.sayi.length == 2 && this.sayi[0] == index ) {
                this.sayi[0] = onlar[index-1];  

                if (this.sayi.length == 2 && this.sayi[1] == index ) {
                    this.sayi[1] = birler[index];  
                }
                else {
                    for (let index = 0; index <  birler.length; index++) {
                        if (this.sayi[1] == index ){
                         this.sayi[1] = birler[index];
                         
                        }               
                    }

                }
                                      
                this.sayi = this.sayi.join("");
                return this.sayi ;

            }

             
             
        }
        

    }
    
}

let sayi1 = new SayiOkuma(52);
let sayi2 = new SayiOkuma(9);

console.log(sayi1.girilenSayi());
console.log(sayi2.girilenSayi());