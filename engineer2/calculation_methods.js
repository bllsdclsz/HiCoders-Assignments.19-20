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
