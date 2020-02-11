let islerim = ["Yataklari düzelt", "(x) Evi süpür", "Camasirlari yika", "(x) Yemegi yap", "Alisverise git", "Cocugu okuldan al"];


let bitenIsler = recommendFunctions.bitenler(islerim);
recommendFunctions.output("BITEN ISLERIM <br>" + bitenIsler);

let bitmeyenIsler = recommendFunctions.bitmeyenler(islerim);
recommendFunctions.output("<br>BITMEYEN ISLERIM <br>" + bitmeyenIsler);

let islerBittiMi = recommendFunctions.sorgu(islerim);
recommendFunctions.output("<br>ISLERIN HEPSI BITTI MI?<br>" + islerBittiMi);
