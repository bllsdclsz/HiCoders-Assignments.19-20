let A = [1, "d", 999, "js", 2020, 564, "arrays"];
let B = [999, "js", 09, "s", 2020, "link", "arrays", 9076];
let AB = [];

for(let i = 0;i<A.length;i++){
    for(let j = 0;j<B.length;j++){
        if(A[i]===B[j]){
            AB.push(A[i]);
        }
    }
}

console.log(AB);
alert(AB);