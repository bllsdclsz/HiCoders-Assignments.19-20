let islerim = ["Yataklari düzelt", "(x) Evi süpür", "Camasirlari yika", "(x) Yemegi yap", "Alisverise git", "Cocugu okuldan al"];
let bitenislerArray = [];
let bitmeyenislerArray = [];
document.writeln("BITEN ISLERIM <br>");

islerim
    .filter(bitenler)
    .filter(bitenisler);

document.writeln("<br> BITMEYEN ISLERIM <br>");

islerim
    .filter(bitmeyenler)
    .filter(bitmeyenisler);

document.writeln("<br> ISLERIN HEPSI BITTI MI? <br>");

islerim
    .filter(bitenler)
    .filter(bitenekle)
    .filter(yazdirDogru);

islerim
    .filter(bitmeyenler)
    .filter(bitmeyenekler)
    .filter(yazdirYanlis);