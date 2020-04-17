
class DOM {
    
    /**
     * 
     * Bu fonksiyon, parametre olarak gonderilen id'ye gore ilgili Html nesnesini secer. 
     */
    getElementById(pId) {
        return document.querySelector(`#${pId}`);
    }

    getElementByClassName(pClass){
        return document.querySelector(`.${pClass}`);
    }
}

