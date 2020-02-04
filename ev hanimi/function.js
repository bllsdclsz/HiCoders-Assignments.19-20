let bitenler = function(deger){
    return deger.includes("x");
}

let bitenisler = function(deger){
    document.writeln("biten isler:", deger, "<br>");
}

let bitmeyenler = function(deger){
    return !deger.includes("x");
}

let bitmeyenisler = function(deger){
    document.writeln("bitmeyen isler:", deger, "<br>");
}

let bitenekle = function(deger){
    return bitenislerArray.push(deger);
}

let yazdirDogru = function(deger){
    document.writeln("EVET", deger, "<br>");
}

let bitmeyenekler = function(deger){
    return bitmeyenislerArray.push(deger);
}

let yazdirYanlis = function(deger){
    document.writeln("HAYIR", deger, "<br>");
}