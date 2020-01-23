let ayaklar = ["inek", "inek", "tavuk", "domuz", "inek"]
let total = 0;

for(let i = 0; i < ayaklar.length; i++){
    if(ayaklar[i]==="inek"){
        ayaklar[i]==4;
    }else if(ayaklar[i]==="tavuk"){
        ayaklar[i]==2;
    }else if(ayaklar[i]==="koyun"){
        ayaklar[i]==4;
    }else if(ayaklar[i]==="domuz"){
        continue;
    }
    
    total += i;
}

console.log(total);