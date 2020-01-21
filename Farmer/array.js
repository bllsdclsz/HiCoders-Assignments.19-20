let ayaklar = ["inek", "inek", "tavuk", "domuz", "inek"]
let total = 0;

for(let i = 0; i < ayaklar.length; i++){
    if("inek"){
        i=4;
    }else if("tavuk"){
        i=2;
    }else if("koyun"){
        i=4;
    }else if("domuz"){
        i=4;
    }
    total +=  i;
}

console.log(total);