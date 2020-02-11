class recommendFunctions{
    static output(data){
        let result = document.getElementById("result"); // DOM API
        result.innerHTML += data;
    }
    
    static bitenler(deger){
    let x = deger.filter(x=> x.includes("x"));
    return "biten isler:" + x + "<br>";
}

    static bitmeyenler(deger){
    let x = deger.filter(x=> !x.includes("x"));
    return "bitmeyen isler:" + x + "<br>"
}

    static sorgu(deger){
    let x = deger.every(x=> x.includes("x"))
    return x;
}
}
