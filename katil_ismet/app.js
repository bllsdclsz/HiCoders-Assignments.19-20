/**
 * AKIS
 * -Ismet sisteme girer ve müsterilerinin listesini görür.
 * -Bir müsterisinin üzerine tikladiginda, o müsteriye ait bir veya birden fazla hayatina kast edilen kisi listesi karsisina cikar.
 * -Bu listede müstakbel maktulun üzerine tikladiginda o kisinin adreslerini görür. 
 * -Ayrica listedeki kisi dar-ül bekaya irtihal etmisse o kisiyi listede isaretleyecek bir buton bulunur ve
 *  listede ismi silik gösterilmelidir.
 * 
 * ANALIZ
 * -Ismetin sisteme girmesi icin bir login ekranina ihtiyaci vardir. Sisteme girmesiyle program baslar.    **Login** && **LoginView**
 * -Müsterilerini liste halinde görecegi icin bir müsteri classi ve olmalidir.                             **Customer** 
 *      -Onlari bir arrayde tutmali ve sisteme liste halinde yerlestirmelidir.                             **CustomerManager**
 * -Müsterilerin üzerinde tikladiginda maktul listesi görecegi icin maktul class olmadir.                  **Victim**
 *      -Onlarda yine ayri ayri arraylerde olmalidir.                                                      **VictimManager**
 * -Isleri tamalanan kisiler isaretlenecegi icin bir control class olmali.                                 **Controller**
 * -Sistemdeki Eventlari tutan bir event class olmali.                                                     **Eventer**
 * -Sisteme girildikten sonra bunlari ekranda göstermek icin view class olmali.                            **View**
 */

const manager = new Manager();
manager.start();
new AddressForm()

/**
 * view kismini tamamen degistir her birini bir class yap.
 * display kullanma! active ? true : false kullan.
 */