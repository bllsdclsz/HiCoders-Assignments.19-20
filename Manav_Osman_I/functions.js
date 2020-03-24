//Ürünler dizisinde bulunan ürünleri bu fonksiyonla yadiriyoruz ve her birine kendi "id"sini veriyoruz.
function ürünlerEkraninaYazdir(){
    let k=""
    for(let i=0;i<ürünler.length;i++){
       k+= document.querySelector("#ürünler").innerHTML = "<li id='"+ ürünler[i] +"' class='list-group-item list-group-item-dark list-group-item-action'>" + ürünler[i].toUpperCase() + "</li>";
    }
    document.querySelector("#ürünler").innerHTML=k
}
//Siparisler dizisine eklenen ürünler yine her birine kendi "id"leri verilerek sayfaya yazdirilir.
function siparisEkle(){
    let k=""
    for(let i=0;i<siparisler.length;i++){
        k+= document.querySelector("#siparisler").innerHTML = "<li id='"+ siparisler[i] +"' class='list-group-item disabled'>" + siparisler[i].toUpperCase() + "</li>";
    }
    document.querySelector("#siparisler").innerHTML=k;
}
//Bu foksiyon ile listelenmis ürünlere etkinlik kazandirilir.
function ürünleriSec(addFunction){
    for(let i=0;i<ürünler.length;i++){
        document.querySelector("#"+ürünler[i]+"").addEventListener("click",addFunction);
    }
}
//bu fonksiyon "ürünleriSec" fonksiyonunun alt(tabii böyle bir terim varsa) fonksiyonudur.
function addFunction(){
    siparisler.push(this.id)
    //removeFunction(this.id)
    siparisEkle(this.id);
}
/**Bu fonksiyon secilen ürünlerin ürünler listesinden cikrailmasini saglayacakti. Fakat fonksiyon bir kere calistiktan sonra
 * ürünler dizisini degistirdigi icin diger fonksiyonlari calistiramadigindan sonucsuz kaldi.
 * 
 * function removeFunction(a){
    let s=ürünler.indexOf(a)
    ürünler.splice(s,1);

    let k="";
    for(let i = 0;i<s;i++){
        k+=document.querySelector("#ürünler").innerHTML+="<li id='"+ ürünler[i] +"'>" + ürünler[i].toUpperCase() + "</li>";
    }
    document.querySelector("#ürünler").innerHTML=k;
}

 */
