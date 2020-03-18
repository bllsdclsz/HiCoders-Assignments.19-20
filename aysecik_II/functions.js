class aysecikSinirli{
    ekranaYaz(pText){
    let output = document.getElementById("sayi");
    output.innerHTML = output.innerHTML + "<br>" + pText;
}

    bilgiAl(pText){
    let girilenDeger = prompt(pText);
    return girilenDeger;
}

    diziyeSayiEkle(pSayi){
    let girilenSayiDizisi = [];
    girilenSayiDizisi.push(pSayi);
    return girilenSayiDizisi;
}

    sayilariEsitle(){
    let sayilar = {"sifir":0, "bir":1, "iki":2, "üc":3, "dört":4, "bes":5, "alti":6, "yedi":7, "sekiz":8, "dokuz":9, "on":10, "onbir":11, "oniki":12, "onüc":13, "ondört":14, "onbes":15};
    return sayilar;
}
}

