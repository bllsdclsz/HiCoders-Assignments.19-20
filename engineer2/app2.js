let dikdortgenOlanlar = [7,5,2,8,10,20,7,21,12,10,6];
let dikdort = 0;
document.write("Rectangle's area<br>");
for(let i = 0;i<dikdortgenOlanlar.length; i = i +2){
    if(dikdortgenOlanlar[i]===dikdortgenOlanlar[i] && dikdortgenOlanlar[i+1])
    {let dikdort = rectangle_area(dikdortgenOlanlar[i], dikdortgenOlanlar[i + 1]);
    document.write(dikdort, "<br>")}
    else{continue};
}

let daireOlanlar = [6,23,19,0,200,156];
let dairarea = 0;
document.write("Circle's area<br>");
for(let i = 0;i<daireOlanlar.length;i++){
    if(daireOlanlar[i]>0){let dairarea = circle_area(daireOlanlar[i]);
    document.write(dairarea, "<br>")}
    else{
    continue;
    }
}

let kupHacimleri = [2,6,1,4,13, -1]
let kuphac = 0;
document.write("Cube's volume<br>");
for(let i = 0;i<kupHacimleri.length;i++){
    let kuphac = cube_volume(kupHacimleri[i]);
    document.write(kuphac, "<br>");
}

