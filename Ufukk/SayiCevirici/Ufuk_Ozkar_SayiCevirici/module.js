class SayiOkuma{
    sayi ;

    constructor(pSayi){

        this.sayi= String(pSayi).split("")  ;

    }
    
    girilenSayi(){
        
        let birler = ["", "bir", "iki", "uc", "dort", "bes", "alti", "yedi", "sekiz", "dokuz"];
        let onlar = ["", "on", "yirmi", "otuz", "kirk", "elli", "altmis", "yetmis", "seksen", "doksan"];
        let eklenecek = ["yuz ", "bin ", "milyon ", "milyar"];
        
        for (let i = 0; i <  birler.length; i++) {
            if (this.sayi.length == 1 && this.sayi[this.sayi.length-1] == 0 ) {
                this.sayi = "sifir";
                return this.sayi;
            }
            if (this.sayi.length == 1 && this.sayi[this.sayi.length-1] == i && this.sayi[this.sayi.length-1] != 0){
                this.sayi[this.sayi.length-1] = birler[i];
                this.sayi = this.sayi.join("");
                return this.sayi ;
                 
            }               
        }

        for (let i = 0; i < onlar.length; i++) {
            if (this.sayi.length == 2 && this.sayi[this.sayi.length-2] == i ) {
                this.sayi[this.sayi.length-2] = onlar[i];  

                if ( this.sayi[this.sayi.length-1] == i ) {
                    this.sayi[this.sayi.length-1] = birler[i];  
                }
                else {
                    for (let j = 0; j <  birler.length; j++) {
                        if (this.sayi[this.sayi.length-1] == j ){
                         this.sayi[this.sayi.length-1] = birler[j];
                         
                        }               
                    }

                }
                                      
                this.sayi = this.sayi.join("");
                return this.sayi ;

            }
        }

        for (let k = 0; k < birler.length; k++) {
            // bir yuz gibi problem var
            if (this.sayi.length == 3 && this.sayi[this.sayi.length-3] == k ) {
                this.sayi[this.sayi.length-3] = birler[k].concat("", eklenecek[0]);

                if ( this.sayi[this.sayi.length-2] == k) {
                    this.sayi[this.sayi.length-2]= onlar[k];
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-2] == j) {
                            this.sayi[this.sayi.length-2]= onlar[j];
                        }
                    }
                }
                if (this.sayi[this.sayi.length-1] == k) {
                    this.sayi[this.sayi.length-1]= birler[k];
                }
                else{
                    for (let i = 0; i < birler.length; i++) {
                        if (this.sayi[this.sayi.length-1] == i) {
                            this.sayi[this.sayi.length-1]= birler[i];
                        }
                    }
                }
                
                this.sayi = this.sayi.join("");
                return this.sayi ; 
                
            }
            
        }

        for (let index = 0; index < birler.length; index++) {
            //bir bin gibi problem var
            if (this.sayi.length == 4 && this.sayi[this.sayi.length-4] == index ) {
                this.sayi[this.sayi.length-4] = birler[index].concat("", eklenecek[1]);
                
                if (this.sayi[this.sayi.length-3] == index ) {
                    this.sayi[this.sayi.length-3] = birler[index].concat("", eklenecek[0]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-3] == j) {
                            this.sayi[this.sayi.length-3]=  birler[j].concat("", eklenecek[0]);
                        }
                    }
                }
                
                if ( this.sayi[this.sayi.length-2] == index) {
                    this.sayi[this.sayi.length-2]= onlar[index];
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-2] == j) {
                            this.sayi[this.sayi.length-2]= onlar[j];
                        }
                    }
                }
                if (this.sayi[this.sayi.length-1] == index) {
                    this.sayi[this.sayi.length-1]= birler[index];
                }
                else{
                    for (let i = 0; i < birler.length; i++) {
                        if (this.sayi[this.sayi.length-1] == i) {
                            this.sayi[this.sayi.length-1]= birler[i];
                        }
                    }
                }



                this.sayi = this.sayi.join("");
                return this.sayi ; 
            }
            
        }

        for (let index = 0; index < birler.length; index++) {
            if (this.sayi.length == 5 && this.sayi[this.sayi.length-5] == index ) {
                this.sayi[this.sayi.length-5] = onlar[index];

                if (this.sayi[this.sayi.length-4] == index) {
                    this.sayi[this.sayi.length-4] = birler[index].concat("",eklenecek[1]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-4] == j) {
                            this.sayi[this.sayi.length-4]=  birler[j].concat("", eklenecek[1]);
                        }
                    }
                }
                if (this.sayi[this.sayi.length-3] == index  ) {
                    this.sayi[this.sayi.length-3] = birler[index].concat("", eklenecek[0]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-3] == j) {
                            this.sayi[this.sayi.length-3]=  birler[j].concat("", eklenecek[0]);
                        }
                    }
                }
                
                if ( this.sayi[this.sayi.length-2] == index) {
                    this.sayi[this.sayi.length-2]= onlar[index];
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-2] == j) {
                            this.sayi[this.sayi.length-2]= onlar[j];
                        }
                    }
                }
                if (this.sayi[this.sayi.length-1] == index) {
                    this.sayi[this.sayi.length-1]= birler[index];
                }
                else{
                    for (let i = 0; i < birler.length; i++) {
                        if (this.sayi[this.sayi.length-1] == i) {
                            this.sayi[this.sayi.length-1]= birler[i];
                        }
                    }
                }
                

                this.sayi = this.sayi.join("");
                return this.sayi ; 
            }
            
        }

        for (let index = 0; index < birler.length; index++) {
            if (this.sayi.length == 6 && this.sayi[this.sayi.length-6] == index ) {
                this.sayi[this.sayi.length-6] = birler[index].concat("", eklenecek[0]);

                if (this.sayi[this.sayi.length-5] == index) {
                    this.sayi[this.sayi.length-5] = onlar[index];
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-5] == j) {
                            this.sayi[this.sayi.length-5]=  onlar[j];
                        }
                    }
                }
                if (this.sayi[this.sayi.length-4] == index) {
                    this.sayi[this.sayi.length-4] = birler[index].concat("",eklenecek[1]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-4] == j) {
                            this.sayi[this.sayi.length-4]=  birler[j].concat("", eklenecek[1]);
                        }
                    }
                }
                if (this.sayi[this.sayi.length-3] == index  ) {
                    this.sayi[this.sayi.length-3] = birler[index].concat("", eklenecek[0]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-3] == j) {
                            this.sayi[this.sayi.length-3]=  birler[j].concat("", eklenecek[0]);
                        }
                    }
                }
                
                if ( this.sayi[this.sayi.length-2] == index) {
                    this.sayi[this.sayi.length-2]= onlar[index];
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-2] == j) {
                            this.sayi[this.sayi.length-2]= onlar[j];
                        }
                    }
                }
                if (this.sayi[this.sayi.length-1] == index) {
                    this.sayi[this.sayi.length-1]= birler[index];
                }
                else{
                    for (let i = 0; i < birler.length; i++) {
                        if (this.sayi[this.sayi.length-1] == i) {
                            this.sayi[this.sayi.length-1]= birler[i];
                        }
                    }
                }



                this.sayi = this.sayi.join("");
                return this.sayi ; 
            }
            
        }

        for (let index = 0; index < birler.length; index++) {
            if (this.sayi.length == 7 && this.sayi[this.sayi.length-7] == index ) {
                this.sayi[this.sayi.length-7] = birler[index].concat("", eklenecek[2]);

                if (this.sayi[this.sayi.length-6] == index) {
                    this.sayi[this.sayi.length-6] = birler[index].concat("", eklenecek[0]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-6] == j) {
                            this.sayi[this.sayi.length-6]=  birler[j].concat("", eklenecek[0]);
                        }
                    }
                }
                if (this.sayi[this.sayi.length-5] == index) {
                    this.sayi[this.sayi.length-5] = onlar[index];
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-5] == j) {
                            this.sayi[this.sayi.length-5]=  onlar[j];
                        }
                    }
                }
                if (this.sayi[this.sayi.length-4] == index) {
                    this.sayi[this.sayi.length-4] = birler[index].concat("",eklenecek[1]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-4] == j) {
                            this.sayi[this.sayi.length-4]=  birler[j].concat("", eklenecek[1]);
                        }
                    }
                }
                if (this.sayi[this.sayi.length-3] == index ) {
                    this.sayi[this.sayi.length-3] = birler[index].concat("", eklenecek[0]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-3] == j) {
                            this.sayi[this.sayi.length-3]=  birler[j].concat("", eklenecek[0]);
                        }
                    }
                }
                
                if ( this.sayi[this.sayi.length-2] == index) {
                    this.sayi[this.sayi.length-2]= onlar[index];
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-2] == j) {
                            this.sayi[this.sayi.length-2]= onlar[j];
                        }
                    }
                }
                if (this.sayi[this.sayi.length-1] == index) {
                    this.sayi[this.sayi.length-1]= birler[index];
                }
                else{
                    for (let i = 0; i < birler.length; i++) {
                        if (this.sayi[this.sayi.length-1] == i) {
                            this.sayi[this.sayi.length-1]= birler[i];
                        }
                    }
                }



                this.sayi = this.sayi.join("");
                return this.sayi ; 
            }
            
        }

        for (let index = 0; index < birler.length; index++) {
            if (this.sayi.length == 8 && this.sayi[this.sayi.length-8] == index ) {
                this.sayi[this.sayi.length-8] = onlar[index];
                
                if (this.sayi[this.sayi.length-7] == index) {
                    this.sayi[this.sayi.length-7] = birler[index].concat("", eklenecek[2]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-7] == j) {
                            this.sayi[this.sayi.length-7]=  birler[j].concat("", eklenecek[2]);
                        }
                    }
                }

                if (this.sayi[this.sayi.length-6] == index) {
                    this.sayi[this.sayi.length-6] = birler[index].concat("", eklenecek[0]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-6] == j) {
                            this.sayi[this.sayi.length-6]=  birler[j].concat("", eklenecek[0]);
                        }
                    }
                }
                if (this.sayi[this.sayi.length-5] == index) {
                    this.sayi[this.sayi.length-5] = onlar[index];
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-5] == j) {
                            this.sayi[this.sayi.length-5]=  onlar[j];
                        }
                    }
                }
                if (this.sayi[this.sayi.length-4] == index) {
                    this.sayi[this.sayi.length-4] = birler[index].concat("",eklenecek[1]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-4] == j) {
                            this.sayi[this.sayi.length-4]=  birler[j].concat("", eklenecek[1]);
                        }
                    }
                }
                if (this.sayi[this.sayi.length-3] == index ) {
                    this.sayi[this.sayi.length-3] = birler[index].concat("", eklenecek[0]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-3] == j) {
                            this.sayi[this.sayi.length-3]=  birler[j].concat("", eklenecek[0]);
                        }
                    }
                }
                
                if ( this.sayi[this.sayi.length-2] == index) {
                    this.sayi[this.sayi.length-2]= onlar[index];
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-2] == j) {
                            this.sayi[this.sayi.length-2]= onlar[j];
                        }
                    }
                }
                if (this.sayi[this.sayi.length-1] == index) {
                    this.sayi[this.sayi.length-1]= birler[index];
                }
                else{
                    for (let i = 0; i < birler.length; i++) {
                        if (this.sayi[this.sayi.length-1] == i) {
                            this.sayi[this.sayi.length-1]= birler[i];
                        }
                    }
                }



                this.sayi = this.sayi.join("");
                return this.sayi ; 
            }
            
        }

        for (let index = 0; index < birler.length; index++) {
            if (this.sayi.length == 9 && this.sayi[this.sayi.length-9] == index ) {
                this.sayi[this.sayi.length-9] = birler[index].concat("", eklenecek[0]);

                if (this.sayi[this.sayi.length-8] == index) {
                    this.sayi[this.sayi.length-8] = onlar[index];
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-8] == j) {
                            this.sayi[this.sayi.length-8]=  onlar[j];
                        }
                    }
                }
                if (this.sayi[this.sayi.length-7] == index) {
                    this.sayi[this.sayi.length-7] = birler[index].concat("", eklenecek[2]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-7] == j) {
                            this.sayi[this.sayi.length-7]=  birler[j].concat("", eklenecek[2]);
                        }
                    }
                }

                if (this.sayi[this.sayi.length-6] == index) {
                    this.sayi[this.sayi.length-6] = birler[index].concat("", eklenecek[0]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-6] == j) {
                            this.sayi[this.sayi.length-6]=  birler[j].concat("", eklenecek[0]);
                        }
                    }
                }
                if (this.sayi[this.sayi.length-5] == index) {
                    this.sayi[this.sayi.length-5] = onlar[index];
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-5] == j) {
                            this.sayi[this.sayi.length-5]=  onlar[j];
                        }
                    }
                }
                if (this.sayi[this.sayi.length-4] == index) {
                    this.sayi[this.sayi.length-4] = birler[index].concat("",eklenecek[1]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-4] == j) {
                            this.sayi[this.sayi.length-4]=  birler[j].concat("", eklenecek[1]);
                        }
                    }
                }
                if (this.sayi[this.sayi.length-3] == index  ) {
                    this.sayi[this.sayi.length-3] = birler[index].concat("", eklenecek[0]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-3] == j) {
                            this.sayi[this.sayi.length-3]=  birler[j].concat("", eklenecek[0]);
                        }
                    }
                }
                
                if ( this.sayi[this.sayi.length-2] == index) {
                    this.sayi[this.sayi.length-2]= onlar[index];
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-2] == j) {
                            this.sayi[this.sayi.length-2]= onlar[j];
                        }
                    }
                }
                if (this.sayi[this.sayi.length-1] == index) {
                    this.sayi[this.sayi.length-1]= birler[index];
                }
                else{
                    for (let i = 0; i < birler.length; i++) {
                        if (this.sayi[this.sayi.length-1] == i) {
                            this.sayi[this.sayi.length-1]= birler[i];
                        }
                    }
                }



                this.sayi = this.sayi.join("");
                return this.sayi ; 
            }
            
        }

        for (let index = 0; index < birler.length; index++) {
            if (this.sayi.length == 10 && this.sayi[this.sayi.length-10] == index ) {
                this.sayi[this.sayi.length-10] = birler[index].concat("", eklenecek[3]);

                if (this.sayi[this.sayi.length-9] == index) {
                    this.sayi[this.sayi.length-9] = birler[index].concat("", eklenecek[0]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-9] == j) {
                            this.sayi[this.sayi.length-9]=  birler[j].concat("", eklenecek[0]);
                        }
                    }
                }
                if (this.sayi[this.sayi.length-8] == index) {
                    this.sayi[this.sayi.length-8] = onlar[index];
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-8] == j) {
                            this.sayi[this.sayi.length-8]=  onlar[j];
                        }
                    }
                }
                if (this.sayi[this.sayi.length-7] == index) {
                    this.sayi[this.sayi.length-7] = birler[index].concat("", eklenecek[2]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-7] == j) {
                            this.sayi[this.sayi.length-7]=  birler[j].concat("", eklenecek[2]);
                        }
                    }
                }

                if (this.sayi[this.sayi.length-6] == index) {
                    this.sayi[this.sayi.length-6] = birler[index].concat("", eklenecek[0]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-6] == j) {
                            this.sayi[this.sayi.length-6]=  birler[j].concat("", eklenecek[0]);
                        }
                    }
                }
                if (this.sayi[this.sayi.length-5] == index) {
                    this.sayi[this.sayi.length-5] = onlar[index];
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-5] == j) {
                            this.sayi[this.sayi.length-5]=  onlar[j];
                        }
                    }
                }
                if (this.sayi[this.sayi.length-4] == index) {
                    this.sayi[this.sayi.length-4] = birler[index].concat("",eklenecek[1]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-4] == j) {
                            this.sayi[this.sayi.length-4]=  birler[j].concat("", eklenecek[1]);
                        }
                    }
                }
                if (this.sayi[this.sayi.length-3] == index  ) {
                    this.sayi[this.sayi.length-3] = birler[index].concat("", eklenecek[0]);
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-3] == j) {
                            this.sayi[this.sayi.length-3]=  birler[j].concat("", eklenecek[0]);
                        }
                    }
                }
                
                if ( this.sayi[this.sayi.length-2] == index) {
                    this.sayi[this.sayi.length-2]= onlar[index];
                }
                else{
                    for (let j = 0; j < onlar.length; j++) {
                        if (this.sayi[this.sayi.length-2] == j) {
                            this.sayi[this.sayi.length-2]= onlar[j];
                        }
                    }
                }
                if (this.sayi[this.sayi.length-1] == index) {
                    this.sayi[this.sayi.length-1]= birler[index];
                }
                else{
                    for (let i = 0; i < birler.length; i++) {
                        if (this.sayi[this.sayi.length-1] == i) {
                            this.sayi[this.sayi.length-1]= birler[i];
                        }
                    }
                }



                this.sayi = this.sayi.join("");
                return this.sayi ; 
            }
            
        }


    }
    
}
