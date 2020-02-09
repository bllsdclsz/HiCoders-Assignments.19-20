let cars = ["audi", "bmw", "ford", "opel", "fiat", "honda", "toyota", "renault", "tesla", 
            "volvo", "skoda", "nissan", "ferrari", "vw", "alfa romeo", "mitsubishi", "TOGG;)"];

let realcars = cars.filter(filterUnwantedChars);
output("<strong>RealCars</strong><br>" + realcars);

let carsIncludingCharO = realcars.filter(filterCarsIncludingCharO);
output("<br><br><strong>Icinde 'o' harfi olanlar</strong><br>" + carsIncludingCharO);
output("<br><br><strong>Icinde 'o' harfi olan arabalarin sayisi:</strong>" + carsIncludingCharO.length);

let carsContianingTwoOs = realcars.filter(findAutosWithTwoOs);
output("<br><br><strong>Icinde 2 tane 'o' harfi olanlar</strong><br>" + carsContianingTwoOs);
output("<br><br><strong>Icinde 2 tane 'o' harfi olan arabalarin sayisi:</strong>" + carsContianingTwoOs.length);

let filterlengthless5 = realcars.filter(lengthless5);
output("<br><br><strong>Harf uzunlugu 5'ten kucuk arabalar</strong><br>" + filterlengthless5);

let addedx = realcars.filter(firstletter)
                     .map(lastletterx);
output("<br><br><strong>'F' harfi ile baslayan arabalarin sonuna 'x' eklenenler</strong><br>" + addedx);

let filterlenghtbetween6and3 = realcars.filter(lengthbetween6and3)
                                        .map(myFavorite);
output("<br><br><strong>Harf sayilari 6 ile 3 arasinda olan arabalar</strong><br>" + filterlenghtbetween6and3);










































































