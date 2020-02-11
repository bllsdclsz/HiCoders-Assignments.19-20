let cars = ["audi", "bmw", "ford", "opel", "fiat", "honda", "toyota", "renault", "tesla", 
            "volvo", "skoda", "nissan", "ferrari", "vw", "alfa romeo", "mitsubishi", "TOGG;)"];

//0) Araba karakteri tasimayan arabalari;) filtreleyiniz.
let realCars = filterUnwantedChars(cars);
output("<strong>RealCars</strong><br>" + realCars);

//1) Icinde "o" harfi gecen arabalari ve bu arabalarin sayisini bulun.
let carsIncludingCharO = filterCarsIncludingCharO(realCars);
output("<br><br><strong>Icinde 'o' harfi olanlar</strong><br>" + carsIncludingCharO);
output("<br><br><strong>Icinde 'o' harfi olan arabalarin sayisi:</strong>" + carsIncludingCharO.length);

//2) Icinde iki defa "o" harfi gecen arabalarin sayisini bulun.
let carsContianingTwoOs = realCars.filter(findAutosWithTwoOs);
output("<br><br><strong>Icinde 2 tane 'o' harfi olanlar</strong><br>" + carsContianingTwoOs);
output("<br><br><strong>Icinde 2 tane 'o' harfi olan arabalarin sayisi:</strong>" + carsContianingTwoOs.length);

//3) Araba isim uzunlugu 5'den kücük olan arabalari listeleyin.
let filterLengthLess5 = lengthLess5(realCars);
output("<br><br><strong>Harf uzunlugu 5'ten kucuk arabalar</strong><br>" + filterLengthLess5);

//4) Ilk harfi "f" olan arabalarin son harfini x olarak degistirin.
let addedx = fLettersHaveX(realCars);
output("<br><br><strong>'F' harfi ile baslayan arabalarin sonuna 'x' eklenenler</strong><br>" + addedx);

//5) Uzunlugu 3 ile 6 arasinda olan arabalardan isminin icinde "a" harfi olanlari, 
//isimlerinin önüne "my favorite " gelecek sekilde degistirin ve lsiteleyin.
let filterLenghtBetween6and3 = myFavorite(realCars);
output("<br><br><strong>Harf sayilari 6 ile 3 arasinda olan arabalar</strong><br>" + filterLenghtBetween6and3);

//6) Ismi icinde "o" ve "a" gecen arabalari toplam karakter sayisini bulunuz.
let filterFindAutoWithOandA = findAutosWithOandA(realCars);
output("<br><br><strong>Icinde O ve A harfi bulunan arabalar</strong><br>" + filterFindAutoWithOandA);

//7) Ismi icinde "o" veya "i" gecen arabalari toplam karakter sayisini bulunuz.
let filterFindAutosWithOorI = findAutosWithOorI(realCars);
output("<br><br><strong>Icinde O veya I harfi bulunan arabalar</strong><br>" + filterFindAutosWithOorI);

output("<br><br>§<strong>find</strong> metodu uygulanan dizide istenen test unsurlarini saglayan ilk dizi elemanini dondurur. <br>§Testi gecen hicbir eleman yoksa geri donen deger <strong>undefined</strong>'dir. <br>§Yalnizca atanmislar icin degil atnamamislar icin de cagrilir. <br>§Silinen ogeler degerlendirilir. <br>§<strong>filter</strong> metodu uygulanan dizide istenen test unsurlarini dizinin her bir elemani icin dondurur. <br>§Testi gecen hicbir eleman yoksa bos bir dizi dondurur. <br>§Dizinin yalnizca atanmis elemanlari icin cagrilir. <br>§Silinen ogeler degerlendirilmez.")
































































