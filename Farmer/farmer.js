let ayaklar = ["inek", "inek", "tavuk", "domuz", "inek"]
let total = 0;
let x = 0;

for(let i = 0; i < ayaklar.length; i++){
    if(ayaklar[i]==="inek"){
        x=4;
    }else if(ayaklar[i]==="tavuk"){
        x=2;
    }else if(ayaklar[i]==="koyun"){
        x=4;
    }else if(ayaklar[i]==="domuz"){
        continue;
    }
    
    total += x;
}

console.log(total);
alert(total);