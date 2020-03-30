

function ekranaYaz(pText){
    let output = document.getElementById("output");
    output.innerHTML = output.innerHTML + "<br>" + pText;
}


function bilgiAl(pText){
    let girilenDeger = prompt(pText);
    return girilenDeger;
}