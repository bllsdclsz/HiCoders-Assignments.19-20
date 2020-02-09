function box(){
    let txt = 0;
    let r = confirm("Press a button!");
    if(r==true){
        txt= "You pressed OK";
    }else{
        txt= "You pressed cancel" ;
    }
    document.getElementById("demo").innerHTML = txt;
}

