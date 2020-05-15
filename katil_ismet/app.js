/**
 * AKIS
 * -Ismet sisteme girer ve müsterilerinin listesini görür.
 * -Bir müsterisinin üzerine tikladiginda, o müsteriye ait bir veya birden fazla hayatina kast edilen kisi listesi karsisina cikar.
 * -Bu listede müstakbel maktulun üzerine tikladiginda o kisinin adreslerini görür. 
 * -Ayrica listedeki kisi dar-ül bekaya irtihal etmisse o kisiyi listede isaretleyecek bir buton bulunur ve
 *  listede ismi silik gösterilmelidir.
 * 
 * ANALIZ
 * -Ismetin sisteme girmesi icin bir login ekranina ihtiyaci vardir. Sisteme girmesiyle program baslar.    
 * -Müsterilerini liste halinde görecegi icin bir müsteri classi olmalidir.                
 *      -Onlari bir arrayde tutmali ve sisteme liste halinde yerlestirmelidir.                      
 * -Müsterilerin üzerinde tikladiginda maktul listesi görecegi icin maktul class olmadir.  
 *      -Onlarda yine ayri ayri arraylerde olmalidir.                                                      
 * -Maktullerin üzerine tiklandiginda adres listesi görecegi icin adres class olmalidir.
 * -Isleri tamalanan kisiler isaretlenecegi icin bir control class olmali.                                 
 * -Sistemdeki Eventlari tutan bir event class olmali.                                                     
 * -Sisteme girildikten sonra bunlari ekranda göstermek icin view class olmali.                           
 */

const manager = new Manager();
manager.start();
