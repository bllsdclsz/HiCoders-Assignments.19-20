function circle_area (r){
    let x = 2*(Math.PI)*(Math.pow(r, 2));
    return Math.round(x);
}

function rectangle_area (a, b){
    let y = 2*a*b;
    return Math.round(y); 
}

function circle_circle (r) {
    let z = 2*(Math.PI)*r;
    return Math.round(z);
}

function rectangle_perimeter (a, b){
    let u = 2*a*b;
    return Math.round(u);
}

function cube_volume (a){
    let t = Math.pow(a, 3);
    return Math.round(t);
}

function cube_area (a){
    let v = 6*(Math.pow(a, 2));
    return Math.round(v);
}


let dikdortgenOlanlar = [7,5,2,8,10,20,7,21,12,10,6];
let dikdort = 0;
console.log("Rectangle's area");
for(let i = 0;i<dikdortgenOlanlar.length; i = i +2){
    let dikdort = rectangle_area(dikdortgenOlanlar[i], dikdortgenOlanlar[i + 1]);
    console.log(dikdort);
}

let daireOlanlar = [6,23,19,0,200,156];
let dairarea = 0;
console.log("Circle's area");
for(let i = 0;i<daireOlanlar.length;i++){
    let dairarea = circle_area(daireOlanlar[i]);
    console.log(dairarea);
}

let kupHacimleri = [2,6,1,4,13, -1]
let kuphac = 0;
console.log("Cube's volume");
for(let i = 0;i<kupHacimleri.length;i++){
    let kuphac = cube_volume(kupHacimleri[i]);
    console.log(kuphac);
}


