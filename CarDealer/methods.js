function filterUnwantedChars(auto){
    let x = auto.filter(x=> !x.includes(";)"));
    return x;
}

function filterCarsIncludingCharO(auto){
    let x = auto.filter(x=> x.includes("o"));
    return x;
}

function findNumberOfChar(text, char){
    let anArray = text.split("")
    let charArray = anArray.filter(function(harf){
        if(harf == char){
            return true;
        }

        return false;
    });

    return charArray.length;
}

function findAutosWithTwoOs(auto){
    let numberOfOs = findNumberOfChar(auto, "o");
    if(numberOfOs == 2){
        return true;
    }
    return false;
}

function lengthLess5(auto){
    let x = auto.filter(x=> x.length<5);
    return x;
}

function fLettersHaveX (auto){
    let x = auto.filter(x=> x.startsWith("f"));
    let y = x.map(x=> x + "x")
    return y;
}

function myFavorite(auto){
    let x = auto.filter(x=> x.length<6 && x.length>3 && x.includes("a"));
    let y = x.map(x=> "my favorite " + x);
    return y;
}

function findAutosWithOandA(auto){
    let filterIncludingAutosWithOandaA = auto.filter(x=> x.includes("o")&&x.includes("a"))
    let eachAutosLength = filterIncludingAutosWithOandaA.map(x=>x.length);
    let sum = (a, b) => a+b;
    let sumOfAutosLength = eachAutosLength.reduce(sum);
    return filterIncludingAutosWithOandaA + "<br>Her bir arabanin karakter sayisi: " +eachAutosLength 
    + "<br>Karakter sayilarinin toplami: " +sumOfAutosLength;
}

function findAutosWithOorI(auto){
    let x = auto.filter(x=> x.includes("o") || x.includes("i"));
    let y = x.map(x=> x.length);
    let sum = (a, b) => a+b;
    let z = y.reduce(sum);
    return x + "<br>O veya I harfi olan arabalarin karakter sayisi: " + y + "<br>Arabalarin toplam karakter sayisi: " + z;
}
