/**
 * Akis
 * -Kullanici ekrandan kendisine sorulan bir soru ve altinda secenekler görür.
 * -Seceneklerden dogru olani bulmaya calisir.
 * -Herhangi bir secenek secildikten sonra sonraki soruya gecer.
 * -Digerlerinide bu sekilde yapar ve böylelikle toplamda 8 soruya cevap verir.
 * -Kullanici son bölümde sonucunu görür.
 * 
 * Analiz kismi
 * -Ekranda kullaniciya sorulacak sorulari ve secenekleri iceren bir kart olmali.
 * -Bu karta soru bölümüne sorular karisik olarak getirilmeli.
 * -Secenek bölümüne her soru icin hazirlanmis secenekler teker teker butonlarda olmali.
 * -En alt bölümde kacinci soruda oldugu görülmeli.
 * -Kullanici butonlara tiklayarak istedigi secenegi secebilmeli ve sonraki soruya gecebilmeli.
 * -Her soruda verilen dogru cevaplar sayilmali.
 * -Programin sonunda kac dogru yapildigi ekrana yazdirilmali.
 */

/**
 * classi bir degiskene atayip ana fonksiyonlari calistiriyoruz.
 */
let startQuiz = new Quiz(randomedArray);
startQuiz.loadQuestions()
startQuiz.addEventChoice()