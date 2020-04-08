/**
 * Akis
 * -Sol tarafta kisisel bilgilerin girildigi bir form ve kaydet butonu vardir.
 * -Sag tarafta girilen kisisel bilgilerin siralamasi yapilir.
 * -Sag taraftaki kisisel bilgiler tablosunun üzerinde arama motoru var.
 * 
 * Analiz Kismi
 * -Sol tarafta olusturulan formda isim, soyisim ve kanton girilen input ogesi kutucuklari bulunmalidir.
 * -Formun altinda bir kaydet butonu bulunmalidir.
 * -Bu buton yardimiyla girilen bilgiler bir arraya aktarilir ve yeni form icin kutucuklardaki bütün bilgiler silinmelidir.
 * -Kutucuklardan herhangi birinin bos olmasi halinda kaydet butonu islevi yerine getirmeyip bos olan yer icin bir uyarida bulunmalidir.
 * -Sag tarafta kaydet butonuna basildiginda bilgiler bir sira numarasina sahip olarak siralanmalidir. 
 *      -Her kisi icin bir numara.
 * -Isim soyisim ve kanton bilgilerinin oldugu sütunlarin ustunde siralamayi tersine cevirebilen butonlar olmalidir.
 * -Tablonun uzerindeki arama motorunda isim ve soyisime gore arama yapilabilir.
 *      -BU aramalar tablonun altinda siralanabilir.
 */


let manager = new Manager();
manager.start();

/**
 * PS:Siralama yapmayi saglayan fonksiyonlarida yazdim ama sayfada render edemedim. Ve Ödev aciklamasindaki resime dikkat etmedigim icin
 * liste olusturmus bulundum.
 */