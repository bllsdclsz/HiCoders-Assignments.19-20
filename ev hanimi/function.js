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

let sorgu = function(deger){
    let sonuc = deger.includes('x');
    document.writeln('<br>',sonuc);
}
