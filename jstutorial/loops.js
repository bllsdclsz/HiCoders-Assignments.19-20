let numbers = [21, 2, 13, 19, 4, 25]
let total = 0;
let min = numbers[0];
let max = numbers[0];

console.log("Avarage of Numbers");

for(let i = 0; i<numbers.length; i++){
    total += numbers[i];
}
console.log(total/numbers.length);

console.log("Min of Numbers");

for(let i = 0; i<numbers.length; i++){
    if(numbers[i]<min){
        min = numbers[i];
    }
}
console.log(min);

console.log("Max of Numbers");

for(let i = 0; i<numbers.length; i++){
    if(numbers[i]>max){
        max = numbers[i];
    }
}
console.log(max);

console.log("Odd Numbers");

for(let i = 0; i<numbers.length; i++){
    if(numbers[i] % 2 == 1){
        console.log(numbers[i]);
    }
}
