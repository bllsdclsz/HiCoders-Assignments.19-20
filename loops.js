let numbers = [21, 2, 13, 19, 4, 25];

console.log((numbers.reduce((a, b) => a+b, 0))/numbers.length);

console.log(Math.max(...numbers));

console.log(Math.min(...numbers));

console.log(numbers.filter(n => n%2));
