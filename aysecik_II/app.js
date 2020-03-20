let sayiDizisi = [];
let cevrilenSayilarinDizisi = [];
const eslestirmeMap = {'sifir': 0,'bir': 1,'iki': 2,'üc': 3,'dört': 4, 'bes': 5,'alti': 6, 'yedi': 7, 
    'sekiz': 8,'dokuz': 9,'on': 10, 'onbir':11, 'oniki':12, 'onüc':13, 'ondört':14, 'onbes':15};

let girilmesiGerekenSayiMiktari = new Number(bilgiAl("Kac tane sayi gireceksiniz?(orn:1,2)"));//Prompt vasitasiyla kac sayi girilecegi bilgisi elde edilir.
for(let i=0;i<girilmesiGerekenSayiMiktari;i++){                                               //Sonra yine Prompt vasitasiyla bir onceki talimat geregi sayilar yazi olarak bir dizinin icine eklenir.
    let bilgi = bilgiAl("Lutfen sayilarinizi yazi ile giriniz!(orn:bir, iki)");
    diziyeEkle(bilgi, sayiDizisi);
}

let toNumber = Object.keys(eslestirmeMap);                                                    
convertStringstoNumbers(sayiDizisi, cevrilenSayilarinDizisi, toNumber);                       //Dizi de bulunan yazi halindeki sayilari rakamsal ifadeye ceviriyoruz.

let girilenSayilarinSayisi = sayiDizisi.length;                                               
let sayilarinToplami = sayilariTopla(cevrilenSayilarinDizisi);
let sayilarinOrtalamasi = sayilarinOrtalamasinial(sayilarinToplami, cevrilenSayilarinDizisi);
let sayilarinCarpimi = sayilariCarp(cevrilenSayilarinDizisi);
let sayilarinEnbuyugu = sayilarinEnBuyugunuBul(cevrilenSayilarinDizisi);
let sayilarinEnKucugu = sayilarinEnKucugunuBul(cevrilenSayilarinDizisi);

//Yazdirma islemleri
ekranaYaz('result',girilenSayilarinSayisi);
ekranaYaz('result1',sayiDizisi.join(","));
ekranaYaz('result2',cevrilenSayilarinDizisi);
ekranaYaz('result3',sayilarinOrtalamasi)
ekranaYaz('result4',sayilarinToplami)
ekranaYaz('result5',sayilarinCarpimi)
ekranaYaz('result6',sayilarinEnbuyugu)
ekranaYaz('result7',sayilarinEnKucugu)






//Ekrana bilgiler basilir.