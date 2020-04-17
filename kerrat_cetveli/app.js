/**
 * Akis
 * -Ekranda tarihe göre olusturulmus ayri ayri tablolar vardir.
 * -Bu tablolarda testi yapan cocuklarin isimleri ve o gün aldiklari toplam puan vardir.
 * -Test o gün teste katilmayan birisinin ismini girerek baslar.
 * -Test sonunda toplam puani tabloya eklenmis olur.
 * 
 * Analiz Kismi
 * -Ekran acildiginda o güne kadar yapilmis testlerin listesi ayri olarak tablolanmistir.
 * -Ekranda bulunan bir input ögesiyle isim bilgisi alinir.
 * -Baslat butonuyla test baslar.
 * -Test ekraninin solunda sayac bulunur.
 * -Sayacin saginda soru bulunur.
 * -Sorunun yaninda cevabin yazilabilecegi bir input ögesi bulunur.
 * -Input ögesinin yaninda verilen cevap ile dogru cevabi karsilastiran ve sonraki soruya geciren bir button bulunur.
 * -10 saniyelik süre sonunda cevap verilmemisse yada yanlis cevap verilmisse o sorudan puan alamaz.
 * -Her dogru cevap icin cocuk 10 puan alir.
 * -Test sonunda cocuk isminin karsisinda aldigi toplam puani görür.
 */

 let manager = new Manager();
 manager.start();