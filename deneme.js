let sayilar = [3,1,2,6,3,2,67,8,4,21,2,4,7,8];

let ciftleriAl = function(sayi){
    return sayi % 2 == 0;
}

let altidanKucuk = function(sayi){
    return sayi<6;
}

let onKatiniAl = function(sayi){
    return sayi * 10;
}

let ekranaBas = function(sayi){
    console.log("Bu sayi cift ve onun katidir ve 60dan kücüktür", sayi)
}

// map reduce
sayilar
    .filter(ciftleriAl)
    .filter(altidanKucuk)
    .map(onKatiniAl)    
    .forEach(ekranaBas);

    /*
for (let index = 0; index < sayilar.length; index++) {
    const sayi = sayilar[index];
    if (sayi % 2 == 0) {
        //console.log("cifttir", sayi)
    }
}

let ciftSayilar = 
    sayilar.filter(function(sayi){
        return sayi % 2 == 0;
    })

let kucukSayilar =  
    ciftSayilar.filter(function(sayi){
        return sayi<6;
    })

let onKatiSayilar = 
    kucukSayilar.map(function(sayi){
        return sayi * 10;
    })


onKatiSayilar.forEach(function(sayi){
    console.log("Bu sayi cift ve onun katidir ve 60dan kücüktür", sayi)
});
*/