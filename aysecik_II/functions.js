function ekranaYaz(idName, pText){
    let output = document.getElementById(idName);
    output.innerHTML ="<br>" + pText;
}

function bilgiAl(pText){
    let girilenDeger = prompt(pText);
    return girilenDeger.trim('').toLowerCase();
}

function diziyeEkle(pText, pSayiDizisi){
    return pSayiDizisi.push(pText);
}

function convertStringstoNumbers(sayiDizisi, cevrilenSayilarinDizisi, toNumber){
    for (i = 0; i < sayiDizisi.length; i++) {
        for (l = 0; l <= 15; l++) {
            if (sayiDizisi[i] == toNumber[l]) {
                  cevrilenSayilarinDizisi.push(l)
            }
        }
    }
}

function sayilarinOrtalamasinial(sum, pSayiDizisi){
    let uzunluk=pSayiDizisi.length
    let sonuc=sum/uzunluk
    return sonuc;
}

function sayilariTopla(pSayiDizisi){
    return pSayiDizisi.reduce((a,b)=> a + b);
}

function sayilariCarp(pSayiDizisi){
    return pSayiDizisi.reduce((a,b)=>a*b);
}

function sayilarinEnBuyugunuBul(pSayiDizisi){
    return Math.max.apply(Math, pSayiDizisi);
}

function sayilarinEnKucugunuBul(pSayiDizisi){
    return Math.min.apply(Math, pSayiDizisi);
}