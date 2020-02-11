class calculationMethods{

static circle_area (r){
    let x = 2*(Math.PI)*(Math.pow(r, 2));
    return Math.round(x);
}

static rectangle_area (a, b){
    let y = 2*a*b;
    return Math.round(y); 
}

static circle_circle (r) {
    let z = 2*(Math.PI)*r;
    return Math.round(z);
}

static rectangle_perimeter (a, b){
    let u = 2*a*b;
    return Math.round(u);
}

static cube_volume (a){
    let t = Math.pow(a, 3);
    if(t>0)
    return Math.round(t);
    else{
        return ("Hatali deger. (-)eksi degerler islemde kullanilamaz.");
    }
}

static cube_area (a){
    let v = 6*(Math.pow(a, 2));
    return Math.round(v);
}
}