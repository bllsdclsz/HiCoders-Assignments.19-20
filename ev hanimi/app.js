let islerim = ["Yataklari düzelt", "(x) Evi süpür", "Camasirlari yika", "(x) Yemegi yap", "Alisverise git", "Cocugu okuldan al"];


let bitenler = function(deger){
    return deger.includes("x");
}

let bitenisler = function(deger){
    console.log("biten isler:", deger);
}

let bitmeyenler = function(deger){
    return !deger.includes("x");
}

let bitmeyenisler = function(deger){
    console.log("bitmeyen isler:", deger);
}

let kontrolD = function(deger){
    return islerim.length=deger.startsWith("(x)");
}

let kontrolDY = function(deger){
    console.log("True");
}

let kontrolY = function(deger){
    return islerim.length!=deger.startsWith("(x)");
}

let kontrolHata = function(deger){
    console.log("False");
}



islerim
    .filter(bitenler)
    .forEach(bitenisler);

islerim
    .filter(bitmeyenler)
    .forEach(bitmeyenisler);

islerim
    .filter(kontrolD)
    .forEach(kontrolDY);

islerim
    .filter(kontrolY)
    .forEach(kontrolHata);
