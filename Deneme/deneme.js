let Rakam = [
    'sıfır',
    'bir',
    'iki',
    'üç',
    'dört',
    'beş',
    'altı',
    'yedi',
    'sekiz',
    'dokuz'
 ];
 
 function islem() {
   // let gelen = document.getElementById('rakam').value;//
  //  let gelen = 'üç ';
    let gelen1 = parseInt(document.getElementById('rakam').value);
    let gelen2 = document.getElementById('rakam').value;
    console.log('birinci  : ' + gelen);
 
    gelen = String(gelen)
       .toLowerCase() //küçük harf yap
       .trim() // boşlukları sil
       .replace('.', '') // . , gibi işaretleri sil
       .replace(',', '')
       .replace(' ', '')
       .split();
    console.log('ikinci : ' + gelen); //iki
 
    let bulunanRakam = Rakam.indexOf(gelen.toString());
 
    let sonu = 10 - bulunanRakam;
 
    if (bulunanRakam == -1) {
       console.log('Yanlış girdiniz lütfen 10 dan küçük rakam giriniz.');
 
    document.getElementById('bilgi').innerHTML =         'Yanlış girdiniz lütfen 10 dan küçük rakam giriniz';
    } else {
       console.log('Sonuç = ' + sonu);
       document.getElementById('sonuc_web').innerHTML = 'Sonuç : ' + sonu;
       document.getElementById('bilgi').innerHTML =         'İşlem Başarılı';
    }
 
    return sonu;
 }
 console.log('işlem = ' + islem());