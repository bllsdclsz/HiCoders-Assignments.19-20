function output(data){
    let result = document.getElementById("result");
    result.innerHTML += data;
}

function sayiCevirici(sayi){ 
    function BOY(a){
    let B = ["", "bir", "iki", "üc", "dört", "bes", "alti", "yedi", "sekiz", "dokuz"];
    let O = ["", "on", "yirmi", "otuz", "kirk", "elli", "altmis", "yetmis", "seksen", "doksan"];
    let Y = ["", "yüz", "ikiyüz", "ücyüz", "dörtyüz", "besyüz", "altiyüz", "yediyüz", "sekizyüz", "dokuzyüz"];

        return Y[a[0]] + O[a[1]] + B[a[2]];
}
  
    let ekNum = ["", "bin", "milyon", "milyar"];
    let ekSifir = ["", "00", "0"];
    let i, x, boy, sonuc ="";
    
    sayi = ekSifir[sayi.length % 3] + sayi;

    for(i=sayi.length, x=0; i>0 ;i-=3, ++x){
      boy = BOY(sayi.substring(i-3, 12));
      if(boy != "")
        sonuc = boy + " " + ekNum[x] + " " + sonuc;
        
    }
    if(sonuc.substring(0, 7) == "bir bin")
    return sonuc.substring(4);
    else if(sonuc == "")
    return "sifir";
    else
    return sonuc;
}
