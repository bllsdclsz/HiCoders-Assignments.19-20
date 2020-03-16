let birler = ["","bir","iki","üç","dört","beş","altı","yedi","sekiz","dokuz"];
let onlar = ["","on","yirmi","otuz","kırk","elli","altmış","yetmiş","seksen","doksan"];
let grupIsimleri = ["","bin","milyon","milyar","trilyon","katrilyon","kentrilyon"];

/**
 * bu fonksiyon kendisine gönderililen sayıyı önce bir stringe daha sonra 
 * stringin slice metodunu kullanarak 3 lü gruplara ayırıyor
 * örneğin 345'876 sayısını ["876","345"] arrayine çeviriyor
 */


function ucluGurupOlustur(sayiAsString){
    let ucluGurupArrayi = new Array();                                   // [] == new Array(), bunun ile aynı şey
    for(let index = sayiAsStrin.lenght; index>2; index = index-3) {     //  Stringler arraylar gibi itere edilebilir, 3er 3 er asagı dönüyor   
        let birUcluGurup = sayiAsStrin.slice(index-3,index);            // index den 3 asagı inip o parcayı bir gurup olarak alıyoruz    
        ucluGurupArrayi.push(birUcluGurup);                             // arryin sonuna ekliyoruz.

    }
    return ucluGurupArrayi;

 }

 function birlerCozumle(pBasamakDegeri){

    return birler[pBasamakDegeri] + "";                         // birler basamagı degeri, yazı karsılıgını tasıyan birler arrayinde index degeri olarak aranıyor
 }

 function onlarCozumle(pBasamakDegeri){

    return onlar[pBasamakDegeri] + "";                          // onlar basamagı degeri, yazı karsılıgını tasıyan onlar arrayinde index degeri olarak aranıyor

 }

 function yuzlerCozumle(pBasamakDegeri){

    if(pBasamakDegeri == 0){                                    // eger 100 ler basamagı 0 degerine sahipse bos yazı dönüyor
        return "";
    }else if(pBasamakDegeri == 1){
        return "yüz";                                           // eger 1 ise "bir yüz" hatasından kacınmak icin sadece"yüz" degerini gönder   
    }else{
        return birler[pBasamakDegeri] + "yüz";                  // geri kalan degerleri birler arrayini kulalnıp sonuna "yüz" kelimesini ekleyerek geri döndür    
    }
 }

 /**
  * Bu fonksiyon kendisine parametre olarak gönderiln üçlü bir gurubu çözümleyerek okunusunu buluyor
  * örn: 345'sayısınınilk üçlüsü olan
  * "876" sayısını "sekizyüzyetmişaltı" ya çeviriyor. Ayni uygulamayı bir diğer üçlü olan ve bu fonksiyona gönderilen 
  * "345" üçlüsü içinde yapıyor.
  */

  function ucluCozumle(ucSayiAsArray){
      let okunus = "";

      let yuzlerBasamagi = ucSayiAsArray[0];            //yuzler basamagı parametre olarak verilen aaryin soldan ilk gözünde olacak
      let onlarBasamagi = ucSayiAsArray[1];
      let birlerBasamagi = ucSayiAsArray[2];

      if (ucSayiAsArray.lenght == 3){
          okunus = yuzlerCozumle(yuzlerBasamagi) + onlarCozumle(onlarBasamagi) + birlerCozumle(birlerBasamagi);
      }else if(ucSayiAsArray.lenght == 2){
          okunus = onlarCozumle(onlarBasamagi) + birlerCozumle(birlerBasamagi);
      }else { // lenght == 1

        okunus = birlerCozumle(birlerBasamagi);

      }

      return okunus;

  }

  function grubuBul(pUcluSirasi){

    return gurupIsimleri[pUcluSirasi];
  }

  /*************************/
  /*  main.js     */

  let testSayisi = "20019991203456734239146"

  //**console.log("Test","uclu gurup arrayi bul",ucluGurupOlustur(testSayisi)); */
  //**console.log("Test","bir uclu gurup cözümle",ucluCozumle(["1","0","5"])); */
  //**console.log("Test","uclu guruplarin ait oldugu gurubu bul (milyon, milyar gibi), gurubuBul(1)); 
  
    let ucluGuruplar = ucluGurupOlustur(testSayisi);
    let okunus = 
    ucluGuruplar
        .map(function(pUcluGurup, pIndex){
            return ucluCozumle(pUcluGurup) + grubuBul(pIndex);    //olusturulan üclü guruplatı tek tek cözümleyip her gurup icin ait oldugu ana ana gurubun ("bin","milyon" vs) isminide sonuna ekliyor
        })

        .reserve()                                                // yeni olusturulan arri tersine cevirir
        .join();                                                  // tüm arry bir stringe cevirir.  

     console.log("OKUNUSU:",testSayisi, okunus)   