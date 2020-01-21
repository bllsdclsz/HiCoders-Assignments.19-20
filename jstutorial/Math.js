let numbersA = [21, 2, 13, 19, 4, 25];

console.log((numbersA.reduce((a, b) => a+b, 0))/numbersA.length);

console.log(Math.max(...numbersA));

console.log(Math.min(...numbersA));

console.log(numbersA.filter(n => n%2));