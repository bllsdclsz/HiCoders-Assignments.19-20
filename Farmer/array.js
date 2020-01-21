let ayaklar = ["inek", "inek", "tavuk", "domuz", "inek"]
let total = 0;
let x = 0;

for(let i = 0; i < ayaklar.length; i++){
    if("inek"){
        x=4;
    }else if("tavuk"){
        x=2;
    }else if("koyun"){
        x=4;
    }else if("domuz"){
        x=0;
    }
    total +=  x;
}

console.log(total);