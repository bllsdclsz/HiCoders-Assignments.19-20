/**
 * Akis
 * -Müsteri ekranda seker listesini, miktar listesini ve poset cesitlerinin oldugu listeyi görür.
 * -Sectigi kalemler ekranda sirayla yazilir.
 * -Müsterinin ödemesi gereken ücret ekrana yazdirilir.
 * 
 * Analiz 
 * §Model: Seker(yuvarlak lolipop, burgulu lolipop, jelibon, akide sekeri, lokum), manager, poset(kücük, orta, büyük)
 * §View: Otomat.
 * §Controller: Controller
 * 
 * -Seker secildikten sonra miktarina göre ücret hesaplanir.
 * -Hangi büyüklükte poset secilmisse, sekerlerin hacimlarine göre kac poset gerekecegi hesaplanir.
 * -Poset ücreti de toplam ücrete eklenir.
 */
let otomat = new Otomat(); 
let controller = new Controller();
new Manager(otomat.addToDom, controller.control).start();