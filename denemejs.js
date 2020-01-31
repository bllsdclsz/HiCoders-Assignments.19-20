let strng = 'human is born. human lives. Lisa lives. man dies. what is human. man is man.';
let ignore = /human/gi;
console.log(strng.replace(ignore, 'horse'));
let ignore2 = /is/i;
console.log(strng.replace(ignore2, 'will'));
let ignore3 = /man/g;
console.log(strng.replace(ignore3, 'women'));
