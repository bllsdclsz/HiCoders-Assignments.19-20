let islerim = ["Yataklari düzelt", "(x) Evi süpür", "Camasirlari yika", "(x) Yemegi yap", "Alisverise git", "Cocugu okuldan al"];
let bitenislerArray = [];
let bitmeyenislerArray = [];
document.writeln("BITEN ISLERIM <br>");

islerim
    .filter(bitenler)
    .forEach(bitenisler);

document.writeln("<br> BITMEYEN ISLERIM <br>");

islerim
    .filter(bitmeyenler)
    .forEach(bitmeyenisler);


