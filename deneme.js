let islerim = ["(x) Yataklari düzelt", "(x) Evi süpür", "(x) Camasirlari yika", "(x) Yemegi yap", "(x) Alisverise git", "(x)Cocugu okuldan al"];


let sorgu = function(deger){
    islerim.includes('(x)');
    return deger;
}

let sonuc = function(deger){
    if(islerim=true){
        console.log("bitti");
    }else{
        console.log("bitmedi");
    }
}

islerim
    .every(sorgu);

