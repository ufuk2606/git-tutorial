

let ciftlik = [ "inek", "tavuk", "koyun", "domuz", "inek", "tavuk", "koyun"];
let inek = 0;
let tavuk = 0;
let koyun = 0;
let domuz = 0;


for (let i = 0; i < ciftlik.length; i++) {
    
    if ( ciftlik[i] === "inek") {
        inek += 4 ;
    }else if (ciftlik[i] === "tavuk") {
        tavuk += 2 ;
    }else if (ciftlik[i] === "koyun") {
        koyun += 4 ;
    }else if (ciftlik[i] === "domuz") {
        domuz += 4 ;
    }
   
}


console.log( "Ciftligimizde", inek, "inek bacagi, ", tavuk, "tavuk bacagi, ", koyun, "koyun bacagi, ve ", domuz, "domuz bacagi bulunmaktadir."   );
