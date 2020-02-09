function filterUnwantedChars(auto){
    if(auto.includes(";)")){
        return false;
    }
    return true;
}

function filterCarsIncludingCharO(auto){
    if(auto.includes("o")){
        return true;
    }
    return false;
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

function lengthless5(auto){
    if(auto.length<5){
       return true;
    }else{
       return false;
    }
}

function firstletter (auto){
    if(auto.startsWith("f")){
        return true;
    }else{
        return false;
    }
}

function lastletterx (auto){
    let x = auto + ("x");
    return x;
}

function lengthbetween6and3(auto){
        if(auto.length<6){
            if(auto.length>3){
                if(auto.includes("a")){
                    return true;
                }else{
                    return false;
                };
            }else{
                return false;
            };
        }else{
            return false;
        }
}

function myFavorite(auto){
    let x = ("my favorite ") + auto;
    return x;
}
