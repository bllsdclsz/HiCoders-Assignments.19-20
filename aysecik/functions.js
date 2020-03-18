function ekranaYaz(pText){
    let output = document.getElementById("sayi");
    output.innerHTML = output.innerHTML + "<br>" + pText;
}

function bilgiAl(pText){
    let girilenDeger = prompt(pText);
    return girilenDeger;
}

function rakamlar(pSayi){
    if(pSayi==="sifir"){
        return 0;
    }else if(pSayi==="bir"){
        return 1;
    }else if(pSayi==="iki"){
        return 2;
    }else if(pSayi==="üc"){
        return 3;
    }else if(pSayi==="dört"){
        return 4;
    }else if(pSayi==="bes"){
        return 5;
    }else if(pSayi==="alti"){
        return 6;
    }else if(pSayi==="yedi"){
        return 7;
    }else if(pSayi==="sekiz"){
        return 8;
    }else if(pSayi==="dokuz"){
        return 9;
    }else{ 
        alert("Yazi ile bir rakam girmelisiniz");}
}

function tekrarCevir(pSayi){
    if(pSayi===10){
        return "on";
    }else if(pSayi===9){
        return "dokuz";
    }else if(pSayi===8){
        return "sekiz";
    }else if(pSayi===7){
        return "yedi";
    }else if(pSayi===6){
        return "alti";
    }else if(pSayi===5){
        return "bes";
    }else if(pSayi===4){
        return "dört";
    }else if(pSayi===3){
        return "üc";
    }else if(pSayi===2){
        return "iki";
    }else if(pSayi===1){
        return "bir";
    }else if(pSayi===0){
        return "sifir";
    }else{
        return "Hatali sonuc";}
}